export default function ({ app }) {
  const trustedOrigins = ['http://localhost:3000', 'https://dev.docus.com', 'https://docus.com']

  window.addEventListener('message', (event) => {
    if (!trustedOrigins.includes(event.origin)) {
      return
    }

    app.router.push(event.data)
  }, false)

  app.router.afterEach((to, from) => {
    window.parent.postMessage(to.path, '*')
  })
}
