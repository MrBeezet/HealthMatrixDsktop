const { ipcRenderer } = require('electron');

document.getElementById('loginButton').addEventListener('click', () => {
  // Perform login validation here (optional)
  ipcRenderer.send('navigate-to-dashboard');
});
