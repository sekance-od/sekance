function preprocessText(text) {
  // Metni küçük harfe dönüştürme
  text = text.toLowerCase()

  // Gereksiz karakterleri kaldırma
  text = text.replace(/[^\w\s]/gi, '')

  // Diğer ön işleme adımlarını burada uygulayabilirsiniz

  return text
}

module.exports = { preprocessText }
