const cadastroForm = document.getElementById('cadastro-form');

cadastroForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const turma = document.querySelector('input[name="turma"]:checked').value;

  // Update vote count in local storage
  let voteCounts = JSON.parse(localStorage.getItem('voteCounts')) || {}; // Get existing data or initialize
  voteCounts[turma] = (voteCounts[turma] || 0) + 1; // Increment vote for the turma
  localStorage.setItem('voteCounts', JSON.stringify(voteCounts));

  // Optionally, display a success message or redirect
  alert('Voto registrado com sucesso!');
  cadastroForm.reset(); // Reset the form
});



