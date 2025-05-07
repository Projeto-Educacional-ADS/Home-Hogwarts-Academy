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

// Validação do formulário de contato
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("message").value;
    const feedback = document.getElementById("feedback");
  
    if (nome && email && mensagem) {
      feedback.textContent = "Mensagem enviada com sucesso!";
      feedback.style.color = "#7cfc00";
      this.reset();

      setTimeout(() => {
        feedback.textContent = " ";
      }, 10000);

    } else {
      feedback.textContent = "Preencha todos os campos.";
      feedback.style.color = "red";
    }
  });

// Toggle button para o formulário
let openForm = document.querySelector(".open-form");
let closeForm = document.querySelector(".close-form");
let containerForm = document.querySelector(".container");

openForm.addEventListener('click', ()=>{
  containerForm.classList.add('form-active')
  openForm.style.display = 'none';
})

closeForm.addEventListener('click', ()=>{
  containerForm.classList.remove('form-active')
  openForm.style.display = 'flex';
})