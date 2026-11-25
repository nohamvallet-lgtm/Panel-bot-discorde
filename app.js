const navItems = [...document.querySelectorAll('.nav-item')];
const views = [...document.querySelectorAll('.view')];
const titles = {
  overview: ['Vue d’ensemble', 'Voici ce qui se passe sur votre espace Discord.'],
  commands: ['Commandes', 'Explorez le catalogue des commandes du bot.'],
  moderation: ['Modération', 'Consultez les signalements en attente de traitement.'],
  activity: ['Activité', 'Retrouvez les événements récents du bot.']
};
function showView(name) {
  if (!titles[name]) return;
  views.forEach(view => view.classList.toggle('active-view', view.id === name));
  navItems.forEach(item => item.classList.toggle('active', item.dataset.view === name));
  document.getElementById('pageTitle').textContent = titles[name][0];
  document.getElementById('pageSubtitle').textContent = titles[name][1];
  document.getElementById('crumbCurrent').textContent = titles[name][0];
  document.getElementById('sidebar').classList.remove('open');
}
navItems.forEach(item => item.addEventListener('click', () => showView(item.dataset.view)));
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => showView(button.dataset.go)));
document.getElementById('commandSearch').addEventListener('input', event => {
  const query = event.target.value.trim().toLowerCase();
  let visible = 0;
  document.querySelectorAll('#commandRows tr').forEach(row => {
    const match = row.dataset.search.includes(query);
    row.hidden = !match;
    if (match) visible++;
  });
  document.getElementById('noCommands').hidden = visible !== 0;
});
document.getElementById('activityFilter').addEventListener('change', event => {
  const filter = event.target.value;
  document.querySelectorAll('#fullEvents .event').forEach(row => {
    row.hidden = filter !== 'all' && row.dataset.level !== filter;
  });
});
document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});
document.getElementById('refreshButton').addEventListener('click', event => {
  const button = event.currentTarget;
  button.textContent = '✓ Démo actualisée';
  window.setTimeout(() => { button.textContent = '↻ Actualiser'; }, 1400);
});
