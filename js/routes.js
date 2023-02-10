export class Router {

  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event
    event.preventDefault();

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  async handle() {
    const {pathname} = window.location
    const route = this.routes[pathname]
    const html = await fetch(route).then(data => data.text())
    document.querySelector('#app').innerHTML = html

    this.changeImageAndMarkdown()
  }

  changeImageAndMarkdown() {
    const {pathname} = window.location
    if (pathname == '/the-universe') {
      document.body.style.backgroundImage = 'url(./assets/background-o-universo.png)'
      document.querySelector("#link-universe").style.color = '#fff'
    } else if(pathname == '/explorer') {
      document.body.style.backgroundImage = 'url(./assets/background-exploração.png)'
      document.querySelector("#link-explorer").style.color = '#fff'
    } else if(pathname == '/') {
      document.body.style.backgroundImage = 'url(./assets/background-home.png)'
      document.querySelector("#link-home").style.color = '#fff'
    }
  }
  
}

/* 
Esse é o código de uma classe "Router" que gerencia a navegação entre diferentes páginas em uma aplicação. 
Ele armazena as rotas como uma propriedade "routes" como um objeto onde as chaves são os nomes de rota e os valores são as páginas correspondentes.

A classe possui os seguintes métodos:

"add": adiciona uma nova rota ao objeto "routes".

"route": recebe um evento como argumento (ou usa um evento padrão) e impede a ação padrão do evento, 
adiciona uma nova entrada ao histórico do navegador e chama o método "handle".

"handle": obtém o pathname da localização atual, busca a rota correspondente no objeto "routes" e busca o HTML da página correspondente 
usando o fetch API. O conteúdo HTML é então inserido no elemento HTML com id "app". O método "changeImageAndMarkdown" é chamado ao final.

"changeImageAndMarkdown": altera a imagem de fundo do body e a cor do link de acordo com a rota atual.

A classe Router é usada para gerenciar a navegação entre páginas na aplicação e atualizar o conteúdo da 
página e a imagem de fundo de acordo com a rota atual.
*/
