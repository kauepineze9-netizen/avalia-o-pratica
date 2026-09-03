document.addEventListener("DOMContentLoaded", () => {
    // Efeito de animação ao rolar a página (Scroll Reveal)
    const cards = document.querySelectorAll(".card");

    const checkCards = () => {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add("visible");
            }
        });
    };

    // Executa na inicialização e no evento de rolagem
    window.addEventListener("scroll", checkCards);
    checkCards();

    // Rolagem suave para links de navegação
    document.querySelectorAll('.nav a, .btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});