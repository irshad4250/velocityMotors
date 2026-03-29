const carId = new URLSearchParams(window.location.search).get("id")
const car = products.find((product) => product.id === parseInt(carId))

document.getElementsByClassName("productDescription")[0].innerHTML =
  car.description
document.getElementsByClassName("productTitle")[0].innerHTML = car.name
document.getElementsByClassName("productPrice")[0].innerHTML = car.price
document.getElementsByClassName("productImage")[0].src = car.image

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

document
  .getElementsByClassName("buyNowButton")[0]
  .addEventListener("click", () => {
    addToCart(car)
    loadCartItems()
    updateCartTotal()
    openCart()
  })
