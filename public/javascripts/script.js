function onChange(id_cart) {
  const form = document.getElementById('cartForm');
  form.addEventListener('onsubmit', function (e) {
    e.preventDefault();
    fetch('/cart/' + id_cart, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringfy(Object.fromEntries(new FormData(form)))
    })
    .then(response => response.json())
    .then(data => window.reload())

    console.log(submit);
  })
  return false;
}
