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
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context

  let res = await next()

  // get query strings provided with request and path name accessing the page
  const { searchParams, pathname } = new URL(request.url)

  // querystring I'm looking for to create dynamic images, this is an optional thing depending on your case
  name = searchParams.get("name")

  // these are the metatags we want to inject into the site
  ogtag = `
    <meta property="og:title" content="my title" />
    <meta property="og:description" content="my awesome project description" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${request.url}" />
    <meta property="og:image" content="https://example.com/preview.png?${name}" />

    <meta name="twitter:title" content="my twitter title" />
    <meta name="twitter:description" content="my awesome description for twitter" />

    <meta name="description" content="and even more stuff about my page" />
  `

  return rewriter.transform(res)
}