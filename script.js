document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.getElementById('modeToggle');
    const body = document.body;

    function setDarkMode(isDark) {
        if (isDark) {
            body.classList.add('dark-mode');
            modeToggle.textContent = 'Modo Claro';
        } else {
            body.classList.remove('dark-mode');
            modeToggle.textContent = 'Modo Oscuro';
        }
    }

    // Check for saved mode preference or use default (light mode)
    const savedMode = localStorage.getItem('darkMode');
    setDarkMode(savedMode === 'true');

    modeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        setDarkMode(isDarkMode);
    });

    // Apply the correct mode immediately to prevent flash
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger a reflow
    document.body.style.display = '';
});