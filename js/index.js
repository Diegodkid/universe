import { Router } from './routes.js'

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/universe', '/pages/universe.html')
router.add('/explorer', '/pages/explorer.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()