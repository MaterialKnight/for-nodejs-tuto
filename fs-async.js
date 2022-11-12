const { readFile, writeFile } = require('fs')

console.log('start async task')

readFile('./tuto-nodejs/file-1.txt', 'utf-8', (error, result) => {
    if (error) {
        console.log(error)
        return null
    }
    const txt_1 = result
    readFile('./tuto-nodejs/file-2.txt', 'utf-8', (error, result) => {
        if (error) {
            console.log(error)
            return null
        }
        const txt_2 = result
        writeFile(
            './tuto-nodejs/file-3-async.txt',
            `Con el duo del sex: ${txt_1}\n${txt_2}. Plan B, Plan B !`,
            { flag: 'a' },
            (error, result) => {
                if (error) {
                    console.log(error)
                    return null
                }
                console.log('Done with this async task!')
            }
        )
    })
})
console.log('Ready for the next async task!')