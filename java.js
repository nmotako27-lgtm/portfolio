/**
 * التحكم في شريط تمرير المشاريع والشهادات
 * @param {string} sliderId - المعرف الخاص بشريط التمرير
 * @param {number} direction - الاتجاه (1 يمين، -1 يسار)
 */
function scrollSlider(sliderId, direction) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    
    // التمرير بمقدار عرض كارت واحد زائد المسافة (تقريبا 350 بكسل)
    const scrollAmount = 350 * direction; 
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

// إضافة تأثير جمالي لشريط التنقل (Navbar) عند النزول للأسفل
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        nav.style.background = 'rgba(11, 17, 32, 0.95)';
    } else {
        nav.style.boxShadow = 'none';
        nav.style.background = 'rgba(11, 17, 32, 0.8)';
    }
});

// Hamburger menu toggle للموبايل
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinksList = document.getElementById('nav-links');
if (hamburgerBtn && navLinksList) {
    hamburgerBtn.addEventListener('click', () => {
        navLinksList.classList.toggle('open');
        const icon = hamburgerBtn.querySelector('i');
        icon.className = navLinksList.classList.contains('open')
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars';
    });

    // إغلاق القائمة عند الضغط على أي رابط
    navLinksList.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            navLinksList.classList.remove('open');
            hamburgerBtn.querySelector('i').className = 'fa-solid fa-bars';
        });
    });
}

// تمييز رابط الـ nav النشط بناءً على الـ section المرئي
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navAnchors.forEach(a => a.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
}, { threshold: 0.4, rootMargin: '-10% 0px -50% 0px' });
sections.forEach(s => sectionObserver.observe(s));
