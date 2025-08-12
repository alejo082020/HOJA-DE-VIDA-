document.addEventListener('DOMContentLoaded', () => {
    // Animación de carga
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateX(0)';
        }, 200 * index);
    });

    // Interactividad en los enlaces de contacto
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateY(-5px)';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateY(0)';
        });
    });

    // Scroll suave para las secciones
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Añadir efecto de parpadeo al título
const title = document.querySelector('.title');
setInterval(() => {
    title.style.opacity = '0.8';
    setTimeout(() => {
        title.style.opacity = '1';
    }, 500);
}, 2000);
