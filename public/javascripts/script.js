function onChange(id_cart) {
  document.getElementById('cartForm').addEventListener('onsubmit', (e) => {
    e.preventDefault();
    fetch('/cart/' + id_cart, {
      method: 'POST',
      body: new FormData(cartForm)
    })
    .then(response => response.json())
    .then(data => window.reload())

  })
  console.log(FormData);
  return false;
}