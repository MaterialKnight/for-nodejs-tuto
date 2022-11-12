// Built-in modules don't require a path to be imported (just use the name):
const os = require('os')

// os.userInfo() returns info about current user:
const user = os.userInfo()
console.log(user)

// os.uptime() returns the system uptime in seconds:
console.log(`This system's uptime is ${os.uptime()} seconds!`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    total_memory: os.totalmem(),
    free_memory: os.freemem()
}

console.log(currentOS)