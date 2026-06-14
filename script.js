const intro = document.getElementById('netflixIntro');
if (intro) {
    setTimeout(() => intro.classList.add('done'), 4200);
    intro.addEventListener('click', () => intro.classList.add('done'));
}

const roastOverlay = document.getElementById('roastOverlay');
const roastClose   = document.getElementById('roastClose');

function showRoast() {
    roastOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function hideRoast() {
    roastOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

roastClose.addEventListener('click', hideRoast);
roastOverlay.addEventListener('click', e => {
    if (e.target === roastOverlay) hideRoast();
});

document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', () => {
        const selected = profile.dataset.profile;
        if (selected === 'provider') {
            showRoast();
        } else if (selected === 'nourisher') {
            localStorage.setItem('netflixProfile', selected);
            window.location.href = 'nourisher.html';
        }
    });
});
