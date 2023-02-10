import { Events } from "./events.js";
import { Router } from "./routes.js";

const router = new Router();
router.add("/", "./pages/home.html")
router.add("/the-universe", "./pages/the-universe.html")
router.add("/explorer", "./pages/explorer.html")

Events();
router.handle()
window.onpopstate = () => router.handle()