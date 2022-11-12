const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

// The export can be an object, an array, a function or anything; in this case, it's a function.

module.exports = sayHi

// By default, the exports property is an empty object.

console.log(module)