const http = require('http')
const fs = require('fs')

let homeContent = ''
let projectContent = ''
let regsContent = ''

fs.readFile('home.html', (err, home) => {
  if (err) {
    throw err
  }
  homeContent = home
})

fs.readFile('project.html', (err, project) => {
  if (err) {
    throw err
  }
  projectContent = project
})
fs.readFile('registration.html', (err, registration) => {
  if (err) {
    throw err
  }
  regsContent = registration
})
const args = require('minimist')(process.argv.slice(1))

http.createServer((request, response) => {
  const url = request.url
  // const portnumber = request.params.portno
  response.writeHeader(200, { 'Content-Type': 'text/html' })
  switch (url) {
    case '/project':
      response.write(projectContent)
      response.end()
      break
    case '/registration':
      response.write(regsContent)
      response.end()
      break
    default:
      response.write(homeContent)
      response.end()
      break
  }
}).listen(args.port)
