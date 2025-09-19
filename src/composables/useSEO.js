import { ref, onMounted, onUnmounted } from 'vue'

export function useSEO() {
  const metaTags = ref([])

  const setTitle = (title) => {
    document.title = title
  }

  const setMetaTag = (name, content, property = false) => {
    const attribute = property ? 'property' : 'name'
    let meta = document.querySelector(`meta[${attribute}="${name}"]`)
    
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute(attribute, name)
      document.head.appendChild(meta)
      metaTags.value.push(meta)
    }
    
    meta.setAttribute('content', content)
  }

  const setCanonical = (url) => {
    let link = document.querySelector('link[rel="canonical"]')
    
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    
    link.setAttribute('href', url)
  }

  const setSEO = ({
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterTitle,
    twitterDescription,
    twitterImage,
    canonical
  }) => {
    if (title) setTitle(title)
    if (description) setMetaTag('description', description)
    if (keywords) setMetaTag('keywords', keywords)
    
    // Open Graph
    if (ogTitle) setMetaTag('og:title', ogTitle, true)
    if (ogDescription) setMetaTag('og:description', ogDescription, true)
    if (ogImage) setMetaTag('og:image', ogImage, true)
    if (ogUrl) setMetaTag('og:url', ogUrl, true)
    
    // Twitter
    if (twitterTitle) setMetaTag('twitter:title', twitterTitle)
    if (twitterDescription) setMetaTag('twitter:description', twitterDescription)
    if (twitterImage) setMetaTag('twitter:image', twitterImage)
    
    // Canonical
    if (canonical) setCanonical(canonical)
  }

  const cleanupSEO = () => {
    metaTags.value.forEach(meta => {
      if (meta.parentNode) {
        meta.parentNode.removeChild(meta)
      }
    })
    metaTags.value = []
  }

  onUnmounted(() => {
    cleanupSEO()
  })

  return {
    setSEO,
    setTitle,
    setMetaTag,
    setCanonical,
    cleanupSEO
  }
}
