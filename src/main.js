// ESM syntax is supported.
import debugModule from 'debug'
import fs from 'fs'
const debug = debugModule('Main')

debug('Init %s', process.env.NODE_ENV)

class Splitter {
  constructor (storage) {
    this.storage = storage
  }

  _split (fileStream, maxFileSize, generateFilePath, callback) {
    if (maxFileSize <= 0) {
      throw new RangeError('maxFileSize must be greater than 0')
    }
    const partitionNames = []

    const outStreamCreate = (partitionNum) => {
      const filePath = generateFilePath(partitionNum)
      return fs.createWriteStream(filePath)
    }

    this._splitToStream(outStreamCreate, fileStream, maxFileSize, (fileWriteStreams) => {
      fileWriteStreams.forEach((fileWriteStream) => partitionNames.push(fileWriteStream.path))
      callback(partitionNames)
    })
  };

  _splitToStream (outStreamCreate, fileStream, partitionStreamSize, callback) {
    const outStreams = []; const { highWaterMark: defaultChunkSize } = fileStream._readableState
    let currentOutStream; let currentFileSize = 0; let fileStreamEnded = false; let finishedWriteStreams = 0; let openStream = false; let partitionNum = 0

    const endCurrentWriteStream = () => {
      currentOutStream.end()
      currentOutStream = null
      currentFileSize = 0
      openStream = false
    }

    const writeStreamFinishHandler = () => {
      finishedWriteStreams++
      if (fileStreamEnded && partitionNum === finishedWriteStreams) {
        callback(outStreams)
      }
    }

    fileStream.on('readable', () => {
      let chunk
      while ((chunk = fileStream.read(Math.min(partitionStreamSize - currentFileSize, defaultChunkSize))) !== null) {
        if (openStream === false) {
          currentOutStream = outStreamCreate(partitionNum)
          currentOutStream.on('finish', writeStreamFinishHandler)
          outStreams.push(currentOutStream)
          partitionNum++
          openStream = true
        }

        currentOutStream.write(chunk)
        currentFileSize += chunk.length

        if (currentFileSize === partitionStreamSize) {
          endCurrentWriteStream()
        }
      }
    })

    fileStream.on('end', () => {
      if (currentOutStream) {
        endCurrentWriteStream()
      }
      fileStreamEnded = true
    })
  };

  split (fileStream, maxFileSize, rootFilePath, callback) {
    this._split(fileStream, maxFileSize, (n) => `${rootFilePath}.split-${n}`, callback)
  }

  get mode () {
    return process.env.NODE_ENV
  }

  get version () {
    return '1'
  }
}
export default Splitter
// module.exports = Main
