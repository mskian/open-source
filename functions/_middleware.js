let name
let ogtag

class ElementHandler {
  element(element) {
    element.append(ogtag, { html: true })
  }
}
const rewriter = new HTMLRewriter().on("head", new ElementHandler())

export async function onRequest(context) {
  const {
    request,
    env,
    params,
    waitUntil,
    next,
    data,
  } = context

   // get query strings provided with request and path name accessing the page
   const { searchParams, pathname } = new URL(request.url)

  if (pathname == '/diwali/index.html' || pathname == '/diwali') {

  let res = await next()

  // querystring I'm looking for to create dynamic images, this is an optional thing depending on your case
  name = searchParams.get("name")

  // these are the metatags we want to inject into the site
  ogtag = `
    <meta property="og:url" content="${request.url}" />
    <meta property="og:image" content="https://images.weserv.nl/?url=https://img.sanweb.info/dw/dw?name=${name}" />
  `
  return rewriter.transform(res)
  }
}