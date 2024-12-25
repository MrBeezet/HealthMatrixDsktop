document.getElementById('addPatientForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const patientData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      dob: document.getElementById('dob').value,
      gender: document.getElementById('gender').value,
      condition: document.getElementById('condition').value,
  };
  fetch('/api/addPatient', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patientData),
  })
      .then(response => response.json())
      .then(data => alert('Patient added successfully!'))
      .catch(error => alert('Error adding patient.'));
});
