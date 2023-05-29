const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'santiago' && password === 'salazar') {
    window.location.href = 'main.html';
  } else {
    window.location.href = 'register.html';
  }
});
