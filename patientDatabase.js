fetch('/api/patientDatabase')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('patientTable');
        data.forEach(patient => {
            const row = `<tr>
                <td>${patient.id}</td>
                <td>${patient.name}</td>
                <td>${patient.dob}</td>
                <td>${patient.gender}</td>
                <td>${patient.condition}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    });

document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('#patientTable tr').forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(searchTerm) ? '' : 'none';
    });
});
