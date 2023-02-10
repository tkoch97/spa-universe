import { Events } from "./events.js";
import { Router } from "./routes.js";

const router = new Router();
router.add("/", "./pages/home.html")
router.add("/the-universe", "./pages/the-universe.html")
router.add("/explorer", "./pages/explorer.html")

Events();
router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route();

/* 
se a linha "window.route = () => router.route();" for removida e se a aplicação depende dela para navegar entre páginas, 
ao clicar em um dos links que deveriam mudar a página, é possível que ocorra um erro 404 (página não encontrada). 
Isso acontece porque a função "route" não estará mais disponível para ser chamada e, portanto, 
o método "route" da instância de Router não será executado para navegar entre páginas.
*/