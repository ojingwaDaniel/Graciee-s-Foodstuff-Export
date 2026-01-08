export const openWhatsApp = (product, quantity = 1) => {
  const phone = "2348101338296";

  // SAFE ASCII message
  const message =
    `Hello, I want to order ${product.name}. Quantity: ${quantity}. Price: NGN ${product.price}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.location.href = url;
};
