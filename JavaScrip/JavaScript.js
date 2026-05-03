
/**
 * Developer Portfolio Animations
 * Path: /JavaScrip/JavaScrip.js
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Typewriter Effect for the Welcome Header
    const title = document.querySelector('header h1');
    const text = title.innerText;
    title.innerText = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();

    // 2. Scroll Reveal Animation
    // Elements will fade in and slide up when they enter the viewport
    const sections = document.querySelectorAll('section');
    
    const revealOnScroll = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const revealPoint = 150;

            if (sectionTop < window.innerHeight - revealPoint) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
                section.style.transition = "all 0.8s ease-out";
            }
        });
    };

    // Initial styles for sections before they reveal
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // 3. Hover Animation for Language Tags
    const tags = document.querySelectorAll('.tags span');
    tags.forEach(tag => {
        tag.addEventListener('mouseover', () => {
            tag.style.backgroundColor = '#61dafb';
            tag.style.color = '#121212';
            tag.style.transform = 'scale(1.1)';
            tag.style.transition = '0.3s';
        });
        tag.addEventListener('mouseleave', () => {
            tag.style.backgroundColor = '#333';
            tag.style.color = '#e0e0e0';
            tag.style.transform = 'scale(1)';
        });
    });

    // 4. Chess Secret Message
    console.log("%c ♟️ Ready for a chess match? Check the 'Note' section!", "color: #61dafb; font-size: 15px; font-weight: bold;");
});
