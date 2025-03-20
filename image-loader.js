export default function imageLoader({ src, width, quality }) {
  // For absolute URLs (external images), return as is
  if (src.startsWith('http')) {
    return src
  }
  
  // For local images, prepend the base path
  return `/weshoot${src}`
} 