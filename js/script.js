document.addEventListener('DOMContentLoaded', () => {
    // Homepage Calculator
    const jelantahCalculator = document.getElementById('jelantah-calculator');
    if (jelantahCalculator) {
        jelantahCalculator.addEventListener('submit', (e) => {
            e.preventDefault();
            const amount = document.getElementById('jelantah-amount').value;
            const price = amount * 5000; // Assuming Rp 5.000 per liter
            document.getElementById('jelantah-price-result').innerText = `Estimasi Harga: Rp ${price.toLocaleString()}`;
        });
    }

    // Stats Counter Animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Testimonial Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.getAttribute('data-filter');
            testimonialItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Advanced Calculator
    const advancedCalculator = document.getElementById('advanced-calculator');
    if (advancedCalculator) {
        advancedCalculator.addEventListener('submit', (e) => {
            e.preventDefault();
            const volume = document.getElementById('jelantah-volume').value;
            const quality = document.getElementById('jelantah-quality').value;
            let pricePerLiter;
            switch (quality) {
                case 'baik':
                    pricePerLiter = 6000;
                    break;
                case 'sedang':
                    pricePerLiter = 5000;
                    break;
                case 'rendah':
                    pricePerLiter = 4000;
                    break;
            }
            const totalPrice = volume * pricePerLiter;
            document.getElementById('advanced-price-result').innerText = `Estimasi Pendapatan: Rp ${totalPrice.toLocaleString()}`;
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contact');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Pesan Anda telah terkirim!');
            contactForm.reset();
        });
    }
});