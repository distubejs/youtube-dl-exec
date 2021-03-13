'use strict'

const getStream = require('get-stream')
const fs = require('fs').promises
const pEvent = require('p-event')
const mkdirp = require('mkdirp')

const got = require('got')

const BINARY_CONTENT_TYPES = [
  'binary/octet-stream',
  'application/octet-stream',
  'application/x-binary'
]

const {
  YOUTUBE_DL_PATH,
  YOUTUBE_DL_HOST,
  YOUTUBE_DL_DIR,
  YOUTUBE_DL_FILENAME
} = require('./constants')

const download = async (url = YOUTUBE_DL_HOST) => {
  const stream = got.stream(url)
  const response = await pEvent(stream, 'response')
  const contentType = response.headers['content-type']

  if (BINARY_CONTENT_TYPES.includes(contentType)) {
    return getStream(stream, { encoding: 'buffer' })
  }

  const [{ assets, tag_name: version }] = JSON.parse(await getStream(stream))
  const { browser_download_url: downloadUrl } = assets.find(
    ({ name }) => name === YOUTUBE_DL_FILENAME
  )

  await Promise.all([got(downloadUrl).buffer(), mkdirp(YOUTUBE_DL_DIR)])
    .then(([buffer]) => fs.writeFile(YOUTUBE_DL_PATH, buffer, { mode: 493 }))
  return version
}

module.exports = download
