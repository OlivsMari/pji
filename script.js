const rankingTable = document.getElementById('ranking-table').getElementsByTagName('tbody')[0];

// Fetch vote counts from local storage
const voteCounts = JSON.parse(localStorage.getItem('voteCounts')) || {};

// Sort vote counts in descending order
const sortedVoteCounts = Object.entries(voteCounts).sort((a, b) => b[1] - a[1]);

// Update the ranking table
sortedVoteCounts.forEach(entry => {
  const turma = entry[0];
  const votos = entry[1];

  const row = rankingTable.insertRow();
  const turmaCell = row.insertCell();
  const votosCell = row.insertCell();

  turmaCell.textContent = turma;
  votosCell.textContent = votos;
});