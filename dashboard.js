document.getElementById('logoutBtn').addEventListener('click', () => {
  fetch('/api/logout', { method: 'POST' })
      .then(() => {
          // Clear session and redirect to login
          localStorage.clear();
          window.location.href = 'login.html';
      })
      .catch(error => alert('Error logging out.'));
});
