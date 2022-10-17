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

    let name = searchParams.get('name')
    let ogtag
  
    // these are the metatags we want to inject into the site
    ogtag = `
      <meta property="og:url" content="${request.url}" />
      <meta property="og:image" content="https://example.com/preview.png?${name ? 'name=' + name : 'default'}" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:width" content="1200" />
    `
    if ((pathname == '/diwali/index.html' || pathname == '/diwali')) {
    return new HTMLRewriter().on('head', new ElementHandler(ogtag)).transform(res)
    }
  }