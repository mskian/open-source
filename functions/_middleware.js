let name
let ogtag

class ElementHandler {
  element(element) {
    element.append(ogtag, { html: true })
  }
}

export async function onRequest(context) {
  const {
    request,
    env,
    params,
    waitUntil,
    next,
    data,
  } = context

   const { searchParams, pathname } = new URL(request.url)

   let res = await next()

   if (!(pathname === '/diwali' || pathname === '/diwali/index.html')) {
      return res
  }

  name = searchParams.get("name")
  ogtag = `
    <meta property="og:url" content="${request.url}" />
    <meta property="og:image" content="https://images.weserv.nl/?url=https://img.sanweb.info/dw/dw?name=${name}" />
  `
  return new HTMLRewriter().on("head", new ElementHandler())
}