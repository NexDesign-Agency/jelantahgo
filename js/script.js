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
document.getElementById('literInput').addEventListener('input', calculateIncome);

// Hitung saat halaman load
calculateIncome();