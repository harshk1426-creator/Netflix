document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', () => {
        const selected = profile.dataset.profile;
        localStorage.setItem('netflixProfile', selected);
        // Placeholder navigation — next page will be defined per your instructions
        console.log(`Selected profile: ${selected}`);
    });
});
