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
