document.addEventListener('DOMContentLoaded', function () {
    const aboutSection = document.getElementById('about');
    aboutSection.style.display = 'block';
    aboutSection.scrollIntoView({
        behavior: 'smooth'
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', toggleDarkMode);
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDarkMode) {
        enableDarkMode();
    }
});

function scrollToSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.style.display = 'none');

    const section = document.getElementById(sectionId);
    section.style.display = 'block';

    section.scrollIntoView({
        behavior: 'smooth'
    });
}

function validateForm(event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const errorMessage = document.getElementById('form-error-message');

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        event.preventDefault();
        errorMessage.textContent = 'Please fill out all fields.';
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode ? 'true' : 'false');
}

function enableDarkMode() {
    const body = document.body;
    body.classList.add('dark-mode');
}

function disableDarkMode() {
    const body = document.body;
    body.classList.remove('dark-mode');
}

const storedDarkMode = localStorage.getItem('dark-mode');
if (storedDarkMode === 'true') {
    enableDarkMode();
} else {
    disableDarkMode();
}
