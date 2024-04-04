const nameInput = document.getElementById('nameInput');
const groupCount = document.getElementById('groupCount');
const generateGroupsBtn = document.getElementById('generateGroups');
const results = document.getElementById('results');
const pickRandomBtn = document.getElementById('pickRandom'); 

generateGroupsBtn.addEventListener('click', () => {
  const names = nameInput.value.replace(/\r/g, '').split(/,|\n/).filter(n => n.trim()); 
  const numGroups = parseInt(groupCount.value);

  const shuffledNames = names.slice().sort(() => 0.5 - Math.random()); 
  const groups = [];

  for (let i = 0; i < numGroups; i++) {
    groups.push([]); 
  }

  let i = 0;
  while (shuffledNames.length) {
    groups[i % numGroups].push(shuffledNames.pop());
    i++;
  }

  displayGroups(groups);
});

pickRandomBtn.addEventListener('click', () => {
  const names = nameInput.value.replace(/\r/g, '').split(/,|\n/).filter(n => n.trim());

  if (names.length === 0) {
    alert('Please enter some names first.');
    return; 
  }

  const randomIndex = Math.floor(Math.random() * names.length);
  const chosenName = names[randomIndex];

  alert(`Randomly selected person: ${chosenName}`); 
});

function displayGroups(groups) {
  results.innerHTML = ''; 
  groups.forEach((group, index) => {
    const groupDiv = document.createElement('div');
    groupDiv.classList.add('group');

    groupDiv.innerHTML = `<h3>Group ${index + 1}</h3><ul>${group.map(name => `<li>${name}</li>`).join('')}</ul>`;

    results.appendChild(groupDiv);
  });
} 
