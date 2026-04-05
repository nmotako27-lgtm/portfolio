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
