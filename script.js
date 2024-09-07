window.addEventListener('load', function() {
    window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', function () {
    // Função simples para suavizar o scroll para seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Função para animação de fade-in
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Função para ajustar o tamanho do logo
    const logo = document.getElementById('logo');
    const logoSizeSlider = document.getElementById('logo-size');

    logoSizeSlider.addEventListener('input', function () {
        const size = logoSizeSlider.value;
        logo.style.width = size + 'px';
    });

    // Função para abrir informações do veículo em uma nova aba
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        item.addEventListener('click', function () {
            const vehicleId = this.getAttribute('data-id');
            window.open(`vehicle-info.html?id=${vehicleId}`, '_blank');
        });
    });

    // Função para suavizar o scroll para links de navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Função para redimensionar a página em dispositivos móveis
    function adjustLayoutForMobile() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            // Adicione aqui o código para ajustar o layout para dispositivos móveis
            document.body.style.fontSize = "14px"; // Exemplo de ajuste de tamanho de fonte
            // Outros ajustes de layout podem ser adicionados aqui
        } else {
            // Reverter ajustes se não estiver em um dispositivo móvel
            document.body.style.fontSize = ""; // Reverter para o tamanho de fonte padrão
        }
    }

    // Função para redimensionar a barra de navegação superior
    function adjustNavBar() {
        const navBar = document.querySelector('nav');
        const navItems = navBar.querySelectorAll('a');
        const windowWidth = window.innerWidth;

        if (windowWidth < 768) {
            navItems.forEach(item => {
                item.style.margin = '0 5px'; // Ajuste o espaçamento conforme necessário
            });
        } else {
            navItems.forEach(item => {
                item.style.margin = ''; // Reverter para o espaçamento padrão
            });
        }
    }

    // Chamar a função ao carregar a página e ao redimensionar a janela
    adjustLayoutForMobile();
    adjustNavBar();
    window.addEventListener('resize', function() {
        adjustLayoutForMobile();
        adjustNavBar();
    });
});