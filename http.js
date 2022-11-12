const http = require('http')

const server = http.createServer((request, response) => {

    // switch (request.url) {
    //     case '/': response.end("Welcome to the homepage!")
    //         break
    //     case '/about': response.end("About us and this site!")
    //         break
    //     default: response.end(
    //         `<h1>Err...!</h1><p>That page isn't here!</p><a href='/'>back home</a>`
    //     )
    // }

    if (request.url === '/') response.end("Welcome to the homepage!")
    else if (request.url === '/about') response.end("About us and the site!")
    else response.end(`<h1>Err...!</h1><p>That page isn't here!</p><a href='/'>back home</a>`)



    // response.write('Welcome to our home page')
    // response.end()
})
server.listen(5000)