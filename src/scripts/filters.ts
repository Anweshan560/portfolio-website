// Chip filters for any [data-filter-root] section.
// Buttons carry data-filter="<id>", items carry data-cats="id1 id2".
// Imported by several components; the module only runs once.
document.querySelectorAll<HTMLElement>('[data-filter-root]').forEach((root) => {
  const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  const items = Array.from(root.querySelectorAll<HTMLElement>('[data-cats]'));
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.filter!;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      items.forEach((el) => {
        const cats = (el.dataset.cats || '').split(' ');
        el.classList.toggle('is-hidden', id !== 'all' && !cats.includes(id));
      });
    });
  });
});
