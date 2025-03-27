// Contact Form
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value || 'choomba';
    alert(`Message sent, ${name}! We’ll get back to you faster than a quantum bit!`);
    e.target.reset();
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section > div, section > form').forEach(el => {
    el.classList.add('fade-out');
    observer.observe(el);
});

// Button Feedback
document.querySelectorAll('a[href^="tel:"], a[href^="sms:"]').forEach(btn => {
    btn.addEventListener('click', () => {
        alert(`Connecting you now, choomba!`);
    });
});
// Stats Counter
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = 2000 / target; // Adjusts animation speed
        const updateCount = () => {
            if (count < target) {
                count += Math.ceil(target / 100);
                counter.textContent = count > target ? target : count;
                setTimeout(updateCount, speed);
            } else {
                counter.textContent = target;
            }
        };
        updateCount();
    });
}

const statsSection = document.querySelector('.p-10.bg-slate-900');
const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        animateCounters();
        statsObserver.unobserve(statsSection);
    }
}, { threshold: 0.5 });
statsSection && statsObserver.observe(statsSection);
// Easter Egg
let clickCount = 0;
const logo = document.querySelector('header img');
const egg = document.getElementById('easter-egg');
const closeEgg = document.getElementById('close-egg');

logo?.addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        egg.classList.remove('hidden');
        new Audio('assets/ping.mp3').play(); // Reuse ping sound
        clickCount = 0;
    }
});

closeEgg?.addEventListener('click', () => {
    egg.classList.add('hidden');
});
// Footer Button Effects
document.querySelectorAll('footer a').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        new Audio('assets/ping.mp3').play();
    });
    btn.addEventListener('click', (e) => {
        if (!btn.href.includes('tiktok') && !btn.href.includes('mailto')) {
            e.preventDefault();
            alert(`Connecting you via ${btn.title.split(' ')[0]}!`);
        }
    });
});
// Footer Button Effects
document.querySelectorAll('footer a').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        new Audio('assets/ping.mp3').play();
    });
    btn.addEventListener('click', (e) => {
        if (btn.href.includes('tel')) {
            e.preventDefault();
            alert(`Calling ${btn.title.split(' ')[2]}—connect with DTB now!`);
        } else if (btn.href.includes('wa.me')) {
            e.preventDefault();
            alert(`WhatsApping ${btn.href.includes('729983567') ? '+254-729983567' : '+254-104160502'}—chat with us!`);
        }
    });
});
// Tech Lab Card Effects
document.querySelectorAll('.tech-lab.html .animate-float').forEach(card => {
    card.addEventListener('mouseenter', () => {
        new Audio('assets/ping.mp3').play();
    });
    card.addEventListener('click', () => {
        const title = card.querySelector('h4').textContent;
        alert(`DTB’s ${title}: Ready to brew some tech magic for you! Contact us to get started.`);
    });
});
// Social Links Hover Sound
document.querySelectorAll('.p-6 a:not([href*="tel"]):not([href*="mailto"])').forEach(link => {
    link.addEventListener('mouseenter', () => {
        new Audio('assets/ping.mp3').play();
    });
});
// Unified Button Effects
document.querySelectorAll('.p-6 a, footer a').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        new Audio('assets/ping.mp3').play();
    });
    btn.addEventListener('click', (e) => {
        if (btn.href.includes('tel') || btn.href.includes('wa.me')) {
            e.preventDefault();
            const num = btn.href.includes('729983567') ? '+254-729983567' : '+254-104160502';
            alert(`${btn.href.includes('tel') ? 'Calling' : 'WhatsApping'} ${num}—reach DTB now!`);
        }
    });
});
