// Add JavaScript for new features
// Scroll to top functionality
window.addEventListener('scroll', function() {
    const scrollTop = document.querySelector('.scroll-top');
    if (window.scrollY > 300) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add click effect to boxes
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Make panel draggable
let isDown = false;
let startX;
let scrollLeft;
const panelops = document.querySelector('.panelops');

panelops.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - panelops.offsetLeft;
    scrollLeft = panelops.scrollLeft;
});

panelops.addEventListener('mouseleave', () => {
    isDown = false;
});

panelops.addEventListener('mouseup', () => {
    isDown = false;
});

panelops.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - panelops.offsetLeft;
    const walk = (x - startX) * 2;
    panelops.scrollLeft = scrollLeft - walk;
});