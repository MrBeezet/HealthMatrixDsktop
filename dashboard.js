const { ipcRenderer } = require('electron');

document.getElementById('addPatient').addEventListener('click', () => {
  ipcRenderer.send('navigate-to-add-patient');
});

document.getElementById('patientDatabase').addEventListener('click', () => {
  ipcRenderer.send('navigate-to-patient-database');
});

document.getElementById('logout').addEventListener('click', () => {
  ipcRenderer.send('navigate-to-login');
});
