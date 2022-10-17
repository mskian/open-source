class ElementHandler {
  constructor(ogtag) {
    this.ogtag = ogtag
  }
  element(element) {
    element.append(this.ogtag, { html: true })
  }
}

export async function onRequest(context) {
  const { request, next } = context
  const res = await next()
  const { searchParams, pathname } = new URL(request.url)

  if (!(pathname === '/diwali/' || pathname === '/diwali/?name=')) {
    return res
  }

  let name = searchParams.get('name')
  let ogtag

  // these are the metatags we want to inject into the site
  ogtag = `
  <meta property="og:title" content="${name} - Happy Diwali Wishes" />
  <meta property="og:description" content="${name} - Sending you the Happy Diwali Greeting Wishes" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${request.url}" />
  <meta property="og:image" content="https://images.weserv.nl/?url=https://img.sanweb.info/dw/dw?name=${name}" />
  `

  return new HTMLRewriter().on('head', new ElementHandler(ogtag)).transform(res)
}