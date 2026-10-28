const q = document.getElementById('q');
const rows = document.querySelectorAll('#list li');
const none = document.getElementById('none');

q.addEventListener('input', function () {
  const term = q.value.toLowerCase();
  let found = 0;
  rows.forEach(function (row) {
    const match = row.textContent.toLowerCase().includes(term);
    row.style.display = match ? '' : 'none';
    if (match) { found++; }
  });
  none.classList.toggle('show', found === 0);
});