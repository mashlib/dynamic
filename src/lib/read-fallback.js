// When a read from another site is refused before it is sent, ask again the plain way.
//
// rdflib asks for everything it can parse, so its Accept header is long. A browser sends a
// request with a long Accept header to another site only after asking that site's permission
// (a CORS preflight). Solid servers answer the question. Static sites (GitHub Pages and the
// like) do not, although they would have served the file to a plain request, so the read
// fails without ever reaching them and the data browser shows "Failed to fetch".
//
// Every read goes through the Fetcher's _fetch. On a GET or HEAD of another site that fails
// outright (a TypeError: no response at all), this asks once more with a short Accept header
// and no credentials, which needs no permission. Anything that got an answer, any write, and
// anything on this site is left exactly as it was.
//
// solid-logic may hand the fetcher a new _fetch (logging in does), so the wrapper sits on
// the property itself, not on the function that happens to be there now.

const PLAIN_ACCEPT = 'text/turtle, application/ld+json;q=0.9, */*;q=0.5'

export function installReadFallback (fetcher) {
  if (!fetcher || fetcher.__readFallback) return

  let inner = fetcher._fetch

  async function read (input, init = {}) {
    try {
      return await inner.call(this, input, init)
    } catch (error) {
      const method = String(init.method || (typeof input === 'object' && input.method) || 'GET').toUpperCase()
      let url

      try { url = new URL(typeof input === 'string' ? input : input.url, location.href) } catch (e) { throw error }

      if (!(error instanceof TypeError) || url.origin === location.origin || (method !== 'GET' && method !== 'HEAD')) throw error

      try {
        return await fetch(url.href, { method, headers: { accept: PLAIN_ACCEPT }, credentials: 'omit', cache: init.cache })
      } catch (e) {
        throw error // the plain way failed too: report the first failure
      }
    }
  }

  fetcher.__readFallback = true
  Object.defineProperty(fetcher, '_fetch', {
    configurable: true,
    enumerable: true,
    get () { return read },
    set (next) { if (typeof next === 'function' && next !== read) inner = next }
  })
}
