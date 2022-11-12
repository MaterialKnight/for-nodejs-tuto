/* GLOBALS - NO WINDOW !
__dirname - path to current directory
__filename - file name
require - function to use modules (Common JS)
module - info about current module (file)
process - info about env where the program is being executed
*/

const amount = 12

if (amount < 10) {
    console.log('small number')
} else {
    console.log('large number')
}
console.log('This is my 1st node app!')

console.log(
    '\n__dirname:', __dirname,
    '\n__filename:', __filename,
    '\nrequire', require,
    '\nmodule', module,
    '\nprocess', process
)

setTimeout(() => console.log('hello world'), 1000)