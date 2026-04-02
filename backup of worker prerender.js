addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const userAgent = (request.headers.get('User-Agent') || '').toLowerCase()
  
  console.log(`Request for: ${url.pathname}, UserAgent: ${userAgent}`)

  if (
    request.headers.get('X-Prerender-Token') ||
    userAgent.includes('prerender')
  ) {
    console.log('Already prerendered, passing through')
    return fetch(request)
  }

  const isAsset = /\.(js|css|png|jpg|jpeg|gif|svg|webp|ico|woff|woff2|ttf|mp4|webm|pdf)$/i.test(url.pathname)

  if (
    isAsset ||
    url.pathname === '/robots.txt' ||
    url.pathname.includes('sitemap') ||
    url.pathname === '/favicon.ico'
  ) {
    console.log('Asset or special file, serving directly')
    return fetch(request)
  }
  
  const crawlers = [
    'googlebot',
    'bingbot',
    'yandexbot',
    'duckduckbot',
    'applebot',
    'ahrefsbot',
    'ahrefssiteaudit',
    'semrushbot',
    'mj12bot',
    'dotbot',
    'rogerbot',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'pinterestbot',
    'slackbot',
    'gptbot',
    'chatgpt',
    'claudebot',
    'anthropic-ai',
    'perplexitybot',
    'baiduspider',
    'yandex', 
    'seznambot',
    'naverbot',
    'ia_archiver',
    'mediapartners-google'
  ]

  const isBot = crawlers.some(bot => userAgent.includes(bot))
  const isHTMLRequest = !isAsset

  if (isBot && isHTMLRequest) {
    console.log(`Bot detected: ${userAgent}, prerendering: ${url.href}`)
    
    const cacheUrl = new URL(url.href)
    cacheUrl.searchParams.set('_prerender', 'true')
    
    const prerenderUrl = `https://service.prerender.io/${url.href}`
    
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    try {
      const response = await fetch(prerenderUrl, {
        headers: {
          'X-Prerender-Token': 'wo795CA3VRWEG7dDSXHA',
          'User-Agent': userAgent, // Pass original user agent
          'X-Prerender-User-Agent': userAgent, // Explicitly tell Prerender.io the bot
        },
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)

      console.log(`Prerender response status: ${response.status} for ${url.pathname}`)

      if (!response || response.status !== 200) {
        console.log(`Prerender failed with status ${response?.status}, falling back to normal response`)
        return fetch(request)
      }

      // Get the response text to validate meta tags
      const html = await response.text()
      
      // Check if meta tags are present
      const hasMetaTitle = /<title[^>]*>.*?<\/title>/i.test(html)
      const hasMetaDescription = /<meta\s+name="description"[^>]*content="[^"]*"[^>]*>/i.test(html) || 
                                 /<meta\s+property="og:description"[^>]*content="[^"]*"[^>]*>/i.test(html)
      
      if (!hasMetaTitle || !hasMetaDescription) {
        console.warn(`WARNING: Missing meta tags for ${url.pathname} - Title: ${hasMetaTitle}, Description: ${hasMetaDescription}`)
      }

      return new Response(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'X-Prerendered': 'true',
          'X-Preready': 'true',
          'Cache-Control': 'public, max-age=3600, s-maxage=3600',
          'Vary': 'User-Agent'
        }
      })

    } catch (err) {
      clearTimeout(timeoutId)
      console.error(`Worker error for ${url.pathname}: ${err.message}`)
      
      return fetch(request)
    }
  }

  let response = await fetch(request)
  
  if (response.status === 404 && isHTMLRequest) {
    console.log(`404 detected for ${url.pathname}, redirecting to homepage`)
    return Response.redirect(`${url.origin}/`, 302)
  }

  return response
}