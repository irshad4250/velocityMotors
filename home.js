products.forEach((car) => {
  addCarToDOM(car)
})

function getProductCardTag(car) {
  return `<div class="productCard" id="car-${car.id}">
  
          <div class="productImageContainer">
            <img
              src="${car.image}"
              alt="${car.name}"
            />
          </div>
          <h3>${car.name}</h3>
          <p>${car.description}</p>
          <div class="priceAndButton">
            <p class="productPrice">${car.price}</p>
            <button class="buyNowButton">Add to cart</button>
          </div>
        </div>`
}

function addCarToDOM(car) {
  const productContainer = document.getElementsByClassName("ourProducts")[0]
  const child = htmlToElement(getProductCardTag(car))
  child.addEventListener("click", () => {
    window.location.href = `product.html?id=${car.id}`
  })

  //adding event listener to add to cart
  child
    .getElementsByClassName("buyNowButton")[0]
    .addEventListener("click", (event) => {
      event.stopPropagation()
      addToCart(car)

      loadCartItems()
      updateCartTotal()

      openCart()
    })
  productContainer.appendChild(child)
}

function addToCart(car) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const existingItemIndex = cart.findIndex((item) => item.id === car.id)
  if (existingItemIndex !== -1) {
    return
  } else {
    cart.push({ id: car.id, quantity: 1 })
  }
  localStorage.setItem("cart", JSON.stringify(cart))
}
