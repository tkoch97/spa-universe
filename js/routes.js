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

  handle() {
    const {pathname} = window.location
    const route = this.routes[pathname]
    
    fetch(route)
    .then(data => data.text())
    .then(html => {document.querySelector('#app').innerHTML = html})

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
