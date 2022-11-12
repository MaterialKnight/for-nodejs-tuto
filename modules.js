// require() returns whatever was exported from its file argument.

const { name_2, name_3 } = require('./names.js') // Returns an object.
const saludar = require('./utils') // Returns a function.
const more_imports = require('./more_exports.js')

// Importing a module runs it whether you assign it or not; the require() call below runs the module parameter.

require('./mind-grenade.js')

console.log(saludar, more_imports)

saludar(name_2)
saludar(name_3)