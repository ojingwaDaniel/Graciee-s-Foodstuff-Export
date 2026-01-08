export const openWhatsApp = (product, quantity = 1) => {
  const phone = "2347031572272";

  // SAFE ASCII message
  const message =
    `Hello, I want to order ${product.name}. Quantity: ${quantity}. Price: NGN ${product.price}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.location.href = url;
};
