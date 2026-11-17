// @noble/curves and @noble/hashes (about 330 KB) are fetched when a message is first signed
// or checked, not when solid-ui is loaded. So signMsg, verifySignature and getMsgHash are
// async here (upstream: synchronous).
export let schnorr, bytesToHex, hexToBytes, sha256
let loading = null
/** Fetch the curve library. Await this before the synchronous key functions of keys.js. */
export function loadNoble () {
  loading ??= Promise.all([
    import('@noble/curves/secp256k1.js'),
    import('@noble/hashes/utils.js'),
    import('@noble/hashes/sha2.js')
  ]).then((m) => {
    ;({ schnorr } = m[0])
    ;({ bytesToHex, hexToBytes } = m[1])
    ;({ sha256 } = m[2])
  })
  return loading
}

// import {utf8Encoder} from './utils'
// import { getPublicKey } from './keys.js'

export const utf8Decoder = new TextDecoder('utf-8')
export const utf8Encoder = new TextEncoder()

export const SEC = 'https://w3id.org/security#' // Proof, VerificationMethod
// export const CERT = 'http://www.w3.org/ns/auth/cert#' // PrivateKey, PublicKey, key

/* export enum Kind {
  Metadata = 0,
  Text = 1,
  RecommendRelay = 2,
  Contacts = 3,
  EncryptedDirectMessage = 4,
  EventDeletion = 5,
  Reaction = 7,
  BadgeAward = 8,
  ChannelCreation = 40,
  ChannelMetadata = 41,
  ChannelMessage = 42,
  ChannelHideMessage = 43,
  ChannelMuteUser = 44,
  Report = 1984,
  ZapRequest = 9734,
  Zap = 9735,
  RelayList = 10002,
  ClientAuth = 22242,
  BadgeDefinition = 30008,
  ProfileBadge = 30009,
  Article = 30023
} */

export function getBlankMsg () {
  return {
    id: '',
    created: '',
    dateDeleted: '', // TODO to remove if not used
    content: '',
    maker: '',
    sig: '' // TODO to remove if not used
  }
}

/* export function finishMsg (t: MsgTemplate, privateKey: string): Message {
  // to update to chat message triples
  const message = t as Message
  // message.pubkey = getPublicKey(privateKey)
  message.id = getMsgHash(message)
  message.sig = signMsg(message, privateKey)
  return message
} */

export function serializeMsg (msg) {
  // to update to chat messages triples
  /* if (!validateMsg(msg))
    throw new Error("can't serialize message with wrong or missing properties") */

  return JSON.stringify(msg)
}

export async function getMsgHash (message) {
  await loadNoble()
  const msgHash = sha256(utf8Encoder.encode(serializeMsg(message)))
  return bytesToHex(msgHash)
}

// const isRecord = (obj: unknown): obj is Record<string, unknown> => obj instanceof Object

/* export function validateMsg<T> (message: T): message is T & UnsignedMsg {
  if (!isRecord(message)) return false
  if (typeof message.kind !== 'number') return false
  if (typeof message.content !== 'string') return false
  if (typeof message.created_at !== 'number') return false
  if (typeof message.pubkey !== 'string') return false
  if (!message.pubkey.match(/^[a-f0-9]{64}$/)) return false

  if (!Array.isArray(message.tags)) return false
  for (let i = 0; i < message.tags.length; i++) {
    let tag = message.tags[i]
    if (!Array.isArray(tag)) return false
    for (let j = 0; j < tag.length; j++) {
      if (typeof tag[j] === 'object') return false
    }
  }

  return true
} */

export async function verifySignature (sig, message, pubKey) {
  const hash = await getMsgHash(message)
  return schnorr.verify(
    hexToBytes(sig),
    hexToBytes(hash),
    hexToBytes(pubKey)
  )
}

export async function signMsg (message, key) {
  const hash = await getMsgHash(message)
  return bytesToHex(
    schnorr.sign(hexToBytes(hash), hexToBytes(key))
  )
}
