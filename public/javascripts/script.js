const form = document.getElementById('cartForm');
form.addEventListener('submit', (e) => {e.preventDefault()});

function onChange(id_cart) {
  console.log(form);
  console.log(Object.fromEntries(new FormData(form)))
   fetch('/cart/' + id_cart, {
    headers: {
       'Content-Type': 'application/json'
      },
    method: 'PUT',
    body: JSON.stringify(Object.fromEntries(new FormData(form)))
    })
    .then(() => window.location.reload())
    .catch(console.log)
}

const formDelete = document.querySelector('.form-delete');
formDelete.addEventListener('submit', (e) => {e.preventDefault()});

function onDelete(id_cart) {
   fetch('/cart/' + id_cart, {
    headers: {
       'Content-Type': 'application/json'
      },
    method: 'DELETE',
    })
    .then(() => window.location.reload())
    .catch(console.log)
}

if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}

