function toggleMode() {
    const html = document.documentElement;
    const today = new Date();
    const dayOfWeek = today.getDay();
    const img = document.querySelector("#profile img")

    if (dayOfWeek === 5 && !html.classList.contains('friday')) { 
        html.classList.add('friday');
        img.setAttribute('src', './Assets/avatar-friday.png');
    } else if (dayOfWeek !== 5) {
        html.classList.toggle('light');
        img.setAttribute('src', './assets/avatar.png');
    }
}