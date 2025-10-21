// 1. "Tangkap" tombolnya berdasarkan ID
const tombolKangen = document.getElementById("tombolKangen");

// 2. "Tangkap" wadah pesan rahasianya berdasarkan ID
const pesanRahasia = document.getElementById("pesanTersembunyi");

// 3. "Pasang pendengar" di tombol
// Jika tombolnya di-"click"...
tombolKangen.addEventListener("click", function() {
  
  // 4. ...maka jalankan fungsi ini:
  
  // Hapus kelas 'hidden' dari pesan rahasia
  // Ini akan membuat pesannya muncul (karena display:none nya hilang)
  pesanRahasia.classList.remove("hidden");

  // Biar lebih manis, kita ubah tulisan di tombolnya
  tombolKangen.textContent = "Hehe, makasih udah dibuka! ❤️";

  // Matikan tombolnya biar tidak bisa diklik lagi
  tombolKangen.disabled = true;

});

// Tambahkan hewan kelinci dan kucing imut
function createCuteAnimals() {
    // Buat container untuk hewan
    const animalsContainer = document.createElement('div');
    animalsContainer.style.position = 'fixed';
    animalsContainer.style.top = '0';
    animalsContainer.style.left = '0';
    animalsContainer.style.width = '100%';
    animalsContainer.style.height = '100%';
    animalsContainer.style.pointerEvents = 'none';
    animalsContainer.style.zIndex = '9999';
    document.body.appendChild(animalsContainer);

    // Fungsi buat kelinci
    function createBunny() {
        const bunny = document.createElement('div');
        bunny.innerHTML = '🐰';
        bunny.style.position = 'absolute';
        bunny.style.fontSize = '30px';
        bunny.style.left = Math.random() * 90 + 'vw';
        bunny.style.top = '-50px';
        bunny.style.animation = `bounceBunny ${3 + Math.random() * 2}s linear infinite`;
        
        animalsContainer.appendChild(bunny);
        
        // Hapus setelah selesai animasi
        setTimeout(() => {
            bunny.remove();
        }, 5000);
    }

    // Fungsi buat kucing
    function createKitten() {
        const kitten = document.createElement('div');
        kitten.innerHTML = '🐱';
        kitten.style.position = 'absolute';
        kitten.style.fontSize = '35px';
        kitten.style.right = Math.random() * 90 + 'vw';
        kitten.style.bottom = '-50px';
        kitten.style.animation = `bounceKitten ${4 + Math.random() * 2}s linear infinite`;
        
        animalsContainer.appendChild(kitten);
        
        setTimeout(() => {
            kitten.remove();
        }, 6000);
    }

    // Tambahkan style animasi
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounceBunny {
            0% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(20px) rotate(5deg); }
            50% { transform: translateY(0) rotate(0deg); }
            75% { transform: translateY(15px) rotate(-5deg); }
            100% { transform: translateY(0) rotate(0deg); }
        }
        
        @keyframes bounceKitten {
            0% { transform: translateY(0) scaleX(1); }
            25% { transform: translateY(-25px) scaleX(1.1); }
            50% { transform: translateY(0) scaleX(1); }
            75% { transform: translateY(-20px) scaleX(0.9); }
            100% { transform: translateY(0) scaleX(1); }
        }
    `;
    document.head.appendChild(style);

    // Munculkan hewan secara berkala
    setInterval(createBunny, 2000);
    setInterval(createKitten, 2500);
}

// Jalankan ketika halaman dimuat
window.addEventListener('load', createCuteAnimals);
