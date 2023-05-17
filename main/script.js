const cartButton = document.getElementById('cartButton');
const logoutButton = document.getElementById('logoutButton');

cartButton.addEventListener('click', () => {
  // Lógica para abrir el carrito de compras
  console.log('Abrir carrito de compras');
});

logoutButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

function showBuyOption(notebook) {
  const buyOption = notebook.querySelector('.buyOption');
  buyOption.style.display = 'block';
}

function hideBuyOption(notebook) {
  const buyOption = notebook.querySelector('.buyOption');
  buyOption.style.display = 'none';
}
