const cartContainer = document.getElementById("cartContainer")
const cartItems = document.getElementById("cartItems")

document.getElementById("closeCartButton").addEventListener("click", closeCart)
document
  .getElementsByClassName("clearCartButton")[0]
  .addEventListener("click", clearCart)
document
  .getElementsByClassName("checkoutButton")[0]
  .addEventListener("click", checkoutButtonPressed)

function openCart() {
  setTimeout(() => {
    cartContainer.style.right = "0"
  }, 1)
  cartContainer.style.display = "flex"
}

function closeCart() {
  cartContainer.style.right = "-100%"

  setTimeout(() => {
    cartContainer.style.display = "none"
  }, 500)
}

function checkoutButtonPressed() {
  alert("Checkout functionality is not implemented in this demo.")
}

function clearCart() {
  localStorage.removeItem("cart")
  loadCartItems()
  updateCartTotal()
}

function calculateCartTotal() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  let total = 0
  cart.forEach((item) => {
    const car = products.find((product) => product.id === item.id)
    if (car) {
      const priceNumber = parseFloat(car.price.replace(/[^0-9.-]+/g, ""))
      total += priceNumber * item.quantity
    }
  })
  return total
}

function updateCartTotal() {
  const totalAmountElement = document.getElementById("cartTotalAmount")
  const total = calculateCartTotal()
  totalAmountElement.innerText = total.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

function loadCartItems() {
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  console.log(cart)
  cartItems.innerHTML = ""
  cart.forEach((item) => {
    const car = products.find((product) => product.id === item.id)
    if (car) {
      const cartItemElement = htmlToElement(getCartHtml(car, item.quantity))
      cartItems.appendChild(cartItemElement)
      // Add event listener for quantity change
      cartItemElement
        .getElementsByClassName("cartItemQuantity")[0]
        .addEventListener("change", (event) => {
          const newQuantity = parseInt(event.target.value)
          updateCartItemQuantity(car.id, newQuantity)
        })

      // Add event listener for item removal
      cartItemElement
        .getElementsByClassName("cartItemRemoveButton")[0]
        .addEventListener("click", () => {
          removeCartItem(car.id)
        })
    }
  })
}

function removeCartItem(carId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  cart = cart.filter((item) => item.id !== carId)
  localStorage.setItem("cart", JSON.stringify(cart))
  loadCartItems()
  updateCartTotal()
}

function updateCartItemQuantity(carId, newQuantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const itemIndex = cart.findIndex((item) => item.id === carId)
  if (itemIndex !== -1) {
    cart[itemIndex].quantity = newQuantity
    localStorage.setItem("cart", JSON.stringify(cart))
  } else {
    cart.push({ id: carId, quantity: newQuantity })
    localStorage.setItem("cart", JSON.stringify(cart))
  }
}

function getCartHtml(car, initialQuantity) {
  return `
        <div class="cartItem" id="cart-item-${car.id}">
          <div class="cartItemImageCont">
            <img src="${car.image}" alt="Car Image" class="cartItemImage" />
          </div>
          <div class="cartItemDetails">
            <p class="cartItemName">${car.name}</p>
            <p class="cartItemPrice">${car.price.toLocaleString()}</p>
            <div class="cartItemQuantitySection">
              <div>Quantity:</div>
              <input type="number" class="cartItemQuantity" value="${initialQuantity}" min="1" />
            </div>
          </div>
          <div class="cartItemRemovalSection">
            <button class="cartItemRemoveButton">
              <img
                src="https://img.icons8.com/fluent-systems-filled/200/FFFFFF/delete.png"
                alt="Remove Item"
                class="cartItemRemoveImage"
              />
            </button>
          </div>
        </div>
`
}

loadCartItems()
updateCartTotal()
