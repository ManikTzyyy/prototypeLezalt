// Array data flavor
const flavorData = [
    { title: "Chili", desc: "A spicy flavor with a kick!" },
    { title: "Garlic", desc: "A strong, aromatic flavor for the bold." },
    { title: "Black Pepper", desc: "A classic seasoning with a sharp taste." },
    { title: "Rosemary", desc: "A fragrant herb with a refreshing taste." },
    { title: "Shrimp Paste x Chili", desc: "A unique mix of shrimp paste and chili for a bold experience." }
  ];

  // Ambil elemen yang dibutuhkan
  const flavorImages = document.querySelectorAll('.flavor, .flavor-active');
  const flavorTitle = document.getElementById('flavor-title');
  const flavorDesc = document.getElementById('flavor-desc');

  // Tambahkan event listener ke setiap gambar
  flavorImages.forEach((image, index) => {
    image.addEventListener('click', () => {
      // Hapus kelas aktif dari semua gambar
      flavorImages.forEach((img) => img.classList.remove('flavor-active'));

      // Tambahkan kelas aktif ke gambar yang diklik
      image.classList.add('flavor-active');

      // Ubah teks di <h3> dan <p> berdasarkan array
      flavorTitle.textContent = flavorData[index].title;
      flavorDesc.textContent = flavorData[index].desc;

      
    });
  });