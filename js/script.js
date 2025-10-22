function calculateIncome() {
    const literInput = document.getElementById('literInput');
    const resultAmount = document.getElementById('resultAmount');
    
    let liters = parseInt(literInput.value) || 0;
    let pricePerLiter = 0;
    
    // Tentukan harga berdasarkan volume
    if (liters >= 200) {
        pricePerLiter = 8500;
    } else if (liters >= 100) {
        pricePerLiter = 8000;
    } else if (liters >= 40) {
        pricePerLiter = 7500;
    } else {
        pricePerLiter = 0;
    }
    
    const totalIncome = liters * pricePerLiter;
    
    // Format angka ke Rupiah
    const formattedIncome = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(totalIncome);
    
    resultAmount.textContent = formattedIncome;
    
    // Ubah warna berdasarkan apakah memenuhi minimum
    if (liters >= 40) {
        resultAmount.style.color = '#0D9488';
    } else {
        resultAmount.style.color = '#EF4444';
    }
}

// Hitung otomatis saat user mengetik
if (document.getElementById('literInput')) {
    // Hitung otomatis saat user mengetik
    document.getElementById('literInput').addEventListener('input', calculateIncome);

    // Hitung saat halaman load
    calculateIncome();
}

/* ==========================================
   HEADER MOBILE MENU JAVASCRIPT
   Tambahkan kode ini ke file js/script.js
   ========================================== */

// Toggle Mobile Menu
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.querySelector('.mobile-menu-btn');
    
    menu.classList.toggle('active');
    btn.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (menu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Close menu when clicking outside (on the overlay)
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === this) {
                toggleMenu();
            }
        });
    }
});

// Close menu on ESC key press
document.addEventListener('keydown', function(e) {
    const mobileMenu = document.getElementById('mobileMenu');
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
        toggleMenu();
    }
});
/* ==========================================
   AREA LAYANAN TABS
   ========================================== */
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Get the target tab from data attribute
                const targetTab = button.getAttribute('data-tab');

                // Deactivate all buttons and content
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));

                // Activate the clicked button and corresponding content
                button.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });
    }
});