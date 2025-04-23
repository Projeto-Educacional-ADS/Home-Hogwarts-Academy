// Efeito de flutuação para elementos com a classe 'floating'
document.querySelectorAll('.floating').forEach(element => {
    element.style.animation = `floating ${3 + Math.random() * 2}s ease-in-out infinite`;
});

// Efeito de brilho aleatório para botões
setInterval(() => {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.style.boxShadow = `0 0 ${10 + Math.random() * 20}px rgba(255, 215, 0, ${0.3 + Math.random() * 0.3})`;
    });
}, 2000);

// Efeito toggle para o menu de navegação
const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelector('.nav-items');
menuBtn.addEventListener('click', () => {
    navItems.classList.toggle('nav-active');
})
