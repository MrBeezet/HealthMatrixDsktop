const { ipcRenderer } = require('electron');

// Save button click handler
document.getElementById('savePatient').addEventListener('click', () => {
  const patientData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    // Add other fields as necessary
  };

  // Send patient data to the main process (optional for database saving)
  ipcRenderer.send('save-patient-data', patientData);

  // Optionally navigate back to the dashboard
  ipcRenderer.send('navigate-to-dashboard');
});

// Cancel button click handler
document.getElementById('cancel').addEventListener('click', () => {
  ipcRenderer.send('navigate-to-dashboard'); // Navigate back to the dashboard
});
