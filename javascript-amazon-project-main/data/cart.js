export const cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 6,
  },
  { 
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 10,
  },
];

export function addToCart(productId, cartQuantitySelector) {
  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += cartQuantitySelector;
    addedToCartMessage(productId);
    clearTimeout(addedToCartMessage(productId));
  } else {
    cart.push({
      productId: productId,
      quantity: cartQuantitySelector,
    });
    addedToCartMessage(productId);
  }
}

function addedToCartMessage(productId) {
  const addedToCartMessage = document.querySelector(
    `.added-to-cart-${productId}`,
  );

  addedToCartMessage.classList.add("added-to-cart-visible");
  setTimeout(() => {
    addedToCartMessage.classList.remove("added-to-cart-visible");
  }, 2000);
}
