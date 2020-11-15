import express from 'express'
import http from 'http'

export default function startServer(app: express.Application): void {
  const PORT = 3004
  /**
   * Create HTTP server.
   */
  const server = http.createServer(app)

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(PORT)
  server.on('error', onError)
  server.on('listening', onListening)

  /**
   * Event listener for HTTP server "error" event.
   */
  function onError(error: Record<string, unknown>) {
    if (error.syscall !== 'listen') {
      throw error
    }

    const bind = typeof PORT === 'string'
      ? 'Pipe ' + PORT
      : 'Port ' + PORT

    // handle specific listen errors with friendly messages
    switch (error.code) {
    case 'EACCES':
      console.log(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.log(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  function onListening() {
    const addr = server.address()
    if (addr) {
      const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
        console.log('Listening on ' + bind)
    } else {
      console.log('addr not set')
    }
  }
}
