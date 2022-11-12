const { readFileSync, writeFileSync } = require('fs')

console.log('Start sync task!')

const txt_1 = readFileSync('./tuto-nodejs/file-1.txt', 'utf-8')
const txt_2 = readFileSync('./tuto-nodejs/file-2.txt', 'utf-8')

console.log(txt_1, txt_2)

writeFileSync(
    'tuto-nodejs/file-3(1 + 2).txt',
    `Here's the fusion of file-1.txt & file-2.txt: ${txt_1}, ${txt_2}`,
    { flag: 'a' }
)

console.log('Done with this sync task!')
console.log('Ready for the next sync task!')