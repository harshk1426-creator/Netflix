// Back button
document.getElementById('backBtn').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Nav tabs
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Tiles click handlers
const modal = document.getElementById('tileModal');
const modalMessage = document.getElementById('modalMessage');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', () => {
        const message = tile.dataset.message;
        modalMessage.textContent = message;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}
