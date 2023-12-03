window.addEventListener('click', (e) => {
    const circle = document.getElementById('circle');
    circle.style.left = e.clientX - 50 + 'px';
    circle.style.top = e.clientY - 45 + 'px';
    circle.classList.add('circleglow');
    setTimeout(() => { circle.classList.remove('circleglow') }, 500);
})