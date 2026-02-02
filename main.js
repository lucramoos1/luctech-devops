// ===== DARK MODE =====
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
if (darkModeEnabled) {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('darkMode', isLight);
    themeToggle.textContent = isLight ? '☀️' : '🌙';
});

// ===== MENU MOBILE =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block' : 'none';
});

document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== ACTIVE NAV LINK =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const item = this.parentElement;
        
        document.querySelectorAll('.faq-item').forEach(i => {
            if (i !== item && i.classList.contains('active')) {
                i.classList.remove('active');
            }
        });
        
        item.classList.toggle('active');
    });
});

// ===== FORMULÁRIO DE CONTATO =====
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');

function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm() {
    let isValid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    // Reset
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
        input.classList.remove('error');
    });

    if (!name.value.trim()) {
        name.classList.add('error');
        isValid = false;
    }

    if (!email.value.trim() || !validateEmail(email.value)) {
        email.classList.add('error');
        isValid = false;
    }

    if (!subject.value.trim()) {
        subject.classList.add('error');
        isValid = false;
    }

    if (!message.value.trim()) {
        message.classList.add('error');
        isValid = false;
    }

    return isValid;
}

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!validateForm()) {
        showToast('Por favor, preencha todos os campos corretamente', 'error');
        return;
    }

    // Simular envio
    const submitBtn = contactForm.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    setTimeout(() => {
        showToast('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar Mensagem';
    }, 1500);
});

// ===== ANIMAÇÕES ON SCROLL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('service-card') || 
                entry.target.classList.contains('about-text') ||
                entry.target.classList.contains('about-image')) {
                entry.target.classList.add('fade-in-up');
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .about-text, .about-image').forEach(el => {
    observer.observe(el);
});
