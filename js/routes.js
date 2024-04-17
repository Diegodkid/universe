export class Router {
  routes = {}

  add(routeName, link) {
    this.routes[routeName] = link
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
  
    window.history.pushState({}, "", event.target.href)
  
    this.handle()
  }
  
  handle() {
    const { pathname }  = window.location
    const route = this.routes[pathname] || this.routes[404]
  
    if (route === '/pages/home.html') {
      document.querySelector('.app').classList.add('appcenter')
    }

    if (route !== '/pages/home.html') {
      document.querySelector('.app').classList.remove('appcenter')
    }

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('.app').innerHTML = html
      })
  }
}

