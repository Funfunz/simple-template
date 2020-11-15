import config from './configs/MCconfig'
import settings from './configs/MCsettings'
import httpServer from './httpServer'
import { Funfunz } from 'funfunz'

const funfunz = new Funfunz({
  config,
  settings,
})

/**
 * Create HTTP server if not loaded has a plugin.
 */

httpServer(funfunz.middleware)
