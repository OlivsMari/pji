const rankingTable = document.getElementById('ranking-table').getElementsByTagName('tbody')[0];

// Fetch vote counts from local storage
const voteCounts = [
  { 'turma': 'Redes de computadores', 'pontos': 5 },
   { 'turma': 'Logística', 'pontos': 0 },
  { 'turma': 'Servidores', 'pontos': 2 }
]

// Sort vote counts in descending order
const sortedVoteCounts = Object.entries(voteCounts).sort((a, b) => a[1] - b[1]);

// Update the ranking table
voteCounts.forEach(entry => {
  const turma = entry['turma'];
  const votos = entry['pontos'];

  const row = rankingTable.insertRow();
  const turmaCell = row.insertCell();
  const votosCell = row.insertCell();

  turmaCell.textContent = turma;
  votosCell.textContent = votos;
});