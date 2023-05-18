const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleLighIcon = document.getElementById('theme-toggle-light-icon');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');


if ((localStorage.getItem('color-theme') == 'dark') || (!('color-theme' in localStorage)) || window.matchMedia('(prefers-color-sheme: dark)').matches) { // Show light icon
    themeToggleLighIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
    document.documentElement.classList.remove('dark');
}


function toggleMode(e) { // Toggle icon
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLighIcon.classList.toggle('hidden');


    // if is set in local storage
    if (localStorage.getItem('color-theme')) { // if in light mode
        if (localStorage.getItem('color-theme') == 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');

        }
    } else { // if not in localstorage
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}
themeToggleBtn.addEventListener('click', toggleMode);
