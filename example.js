const SplitFile = require('./')
const path = require('path')
const fs = require('fs')
const sp = new SplitFile()

const maxFileSize = 1024 // 1024 bytes per file
const outputPath = path.join(__dirname, '/outputFiles/output') // file path partition's prefix

var readStream = fs.createReadStream('./assets/flower.jpeg')
sp.split(readStream, maxFileSize, outputPath, filePaths => {
  console.log('This is an array of my new files:', filePaths)
})
