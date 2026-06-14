const intro = document.getElementById('netflixIntro');
if (intro) {
    setTimeout(() => intro.classList.add('done'), 4200);
    intro.addEventListener('click', () => intro.classList.add('done'));
}

document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', () => {
        const selected = profile.dataset.profile;
        localStorage.setItem('netflixProfile', selected);
        // Placeholder navigation — next page will be defined per your instructions
        console.log(`Selected profile: ${selected}`);
    });
});
