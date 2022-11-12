const path = require('path')

console.log(path.sep)

// Notice path.join() removes the extra /:
const file_path = path
    .join('/tuto-nodejs/', 'path.join()-demonstration.txt')

console.log(file_path)

const path_base = path.basename(file_path)

console.log("The above URL's basename is:", path_base)

const absolute_file_path = path
    .resolve(__dirname, 'tuto-nodejs', 'path.join()-demonstration.txt')

console.log(absolute_file_path)