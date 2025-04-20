// Saytga interaktivlik qo‘shish uchun JavaScript

// Navbar menyusini ochish uchun funksiyani qo‘shish
const menuLinks = document.querySelectorAll("nav ul li a");

menuLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();  // Default harakatni bloklaymiz (sahifaga o'tmaslik)
        
        const sectionId = link.getAttribute("href").substring(1);  // <a href="#"> ko'rinishda bo'ladi
        const targetSection = document.getElementById(sectionId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 20,  // Sektsiya boshiga biroz pastga o'tish
                behavior: "smooth"  // Smooth scroll effekti
            });
        }
    });
});

// Footerga animatsiya qo‘shish
const footer = document.querySelector("footer p");

footer.addEventListener("mouseover", () => {
    footer.style.color = "#ffeb3b";  // Hover effekti
});

footer.addEventListener("mouseout", () => {
    footer.style.color = "white";  // Hoverdan chiqish
});

// Sektsiyalarni ko'rsatishda animatsiya qo‘shish (Scroll effekti)
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("visible");  // Section ko'rinadigan bo'lsa, class qo'shamiz
        } else {
            section.classList.remove("visible");
        }
    });
});
