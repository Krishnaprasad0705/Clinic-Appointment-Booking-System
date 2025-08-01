document.getElementById('appointmentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('patientName').value;
  const time = document.getElementById('appointmentTime').value;
  const successMsg = document.getElementById('successMessage');

  successMsg.style.display = 'block';
  successMsg.textContent = `✅ Appointment booked for ${name} at ${time}`;

  setTimeout(() => {
    successMsg.style.display = 'none';
    document.getElementById('appointmentForm').reset();
  }, 3000);
});
