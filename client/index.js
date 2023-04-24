const mercadopago = new MercadoPago("public_key", {
    locale: "es-AR", //The most common are: 'pt-BR', 'es-AR', 'en-US'
});

// event at 'checkout-btn'
// Handle call to backend and generate preference.
document.getElementById("checkout-btn").addEventListener("click", function () {
    const orderData = {
        quantity: document.getElementById("quantity").value,
        description: document.getElementById("product-description").innerHTML,
        price: document.getElementById("unit-price").innerHTML
      };
    
      fetch("http://localhost:8080/create_preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
      .then(function (response) {
        return response.json();
      })
      .then(function (preference) {
        createCheckoutButton(preference.id);
        