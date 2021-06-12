'use strict'

const test = require('ava')

const { download } = require('..')
const { YOUTUBE_DL_PLATFORM } = require('../src/constants')

test.serial('download the latest version of youtube-dl with default host', async t => {
  await new Promise(resolve => setTimeout(resolve, 5000))
  const version = await download()

  t.is(typeof version, 'string')
  t.is(version.match(/\d+/g).length, 3)
})

test.serial('download the latest version of youtube-dl with custom host', async t => {
  await new Promise(resolve => setTimeout(resolve, 5000))
  const url = `https://yt-dl.org/downloads/latest/youtube-dl${YOUTUBE_DL_PLATFORM === 'win32' ? '.exe' : ''}`
  const message = await download(url)

  t.is(typeof message, 'string')
})
