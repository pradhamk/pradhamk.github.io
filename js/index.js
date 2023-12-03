function click_circle(mx, my) {
    const circle = document.getElementById('circle');
    circle.style.left = mx - 50 + 'px';
    circle.style.top = my - 45 + 'px';
    circle.classList.add('circleglow');
    setTimeout(() => { circle.classList.remove('circleglow') }, 500);
}

window.addEventListener('click', (e) => { click_circle(e.clientX, e.clientY) })
window.addEventListener('touchstart', (e) => { click_circle(e.touches[0].clientX, e.touches[0].clientY) })
