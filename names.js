/* Modules:
Node.js uses CommonJS under the hood, so every file is a module by default.
Modules - Encapsulated code, you can share only what you want from them. */

// Local:
const name_1 = 'John'

// Shared:
const name_2 = 'Arthur'
const name_3 = 'Joseph'

// The export can be an object, an array, a function or anything; in this case, it's an object.

module.exports = { name_2, name_3 }