let products = [
  {
    id: 1,
    name: "Velocity Viper",
    description:
      "A sleek and powerful sports car designed for speed and agility.",
    price: "Rs 12,000,000",
    image:
      "https://cdn.pixabay.com/photo/2023/01/07/15/03/ai-generated-7703437_1280.jpg",
  },
  {
    id: 2,

    name: "Velocity Cruiser",
    description: "A luxurious sedan that combines comfort with performance.",
    price: "Rs 1,200,000",
    image:
      "https://img.freepik.com/premium-photo/sleek-luxury-sedan-with-hightech-features-design_1355275-1147.jpg",
  },
  {
    id: 3,
    name: "Velocity Explorer",
    description:
      "An adventurous SUV built for off-road capabilities and family-friendly features.",
    price: "Rs 3,500,000",
    image:
      "https://img.freepik.com/premium-photo/concept-car-is-model-brands-new-suv_862994-469086.jpg",
  },

  {
    id: 4,
    name: "Velocity Roadster",
    description:
      "A stylish convertible that offers an exhilarating open-air driving experience.",
    price: "Rs 6,000,000",
    image:
      "https://imagef2.promeai.pro/process/do/615b4ff73c76275c84d54de18057f5ef.webp?sourceUrl=/g/p/gallery/publish/2024/11/29/9ad2339f98f14b549df7e1a2af6aada1.jpg&x-oss-process=image/resize,w_500,h_500/format,webp&sign=eb0f7770c269f6c41d8d2b436ed1983c",
  },
]

function htmlToElement(html) {
  const template = document.createElement("template")
  template.innerHTML = html.trim()
  return template.content.firstElementChild
}
