// Import data dari data.js
import { products, categoryColors } from "../script/products.js";

// Fungsi untuk membuat kartu
const generateCards = (containerSelector) => {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error("Container tidak ditemukan");
    return;
  }

  // Hasilkan kartu untuk setiap produk
  container.innerHTML = products
    .map(
      (product) => `
      <div class="card">
        <div class="column">
          <img src="${product.image}" alt="${product.title}" />
          <div class="column">
            <h6>${product.title}</h6>
            <p class="text">${product.description}</p>
            <button class="toggle-button">Show More</button>
            <div class="row-cat">
              ${product.categories
                .map(
                  (cat) => `
                <div class="cat" style="--clr: ${categoryColors[cat]}">
                  <p>${cat}</p>
                </div>
              `
                )
                .join("")}
            </div>
            <div class="row-price">
            <h6>${product.price}</h6>
            <div class="button">
              <a href=${product.link} style="--clr: #fd8b51"><span>Buy Now</span></a>
            </div>
          </div>
          </div>
          
        </div>
      </div>
    `
    )
    .join("");

  // Tambahkan event listener untuk tombol "Load More"
  container.addEventListener("click", (event) => {
    if (event.target.classList.contains("toggle-button")) {
      const button = event.target;
      const description = button.previousElementSibling;

      // Toggle deskripsi
      if (button.textContent === "Show More") {
        description.style.maxHeight = "none"; // Hilangkan batas tinggi
        description.style.webkitLineClamp = "unset"; // Hilangkan line-clamp
        button.textContent = "Show Less"; // Ubah teks tombol
      } else {
        description.style.maxHeight = "3rem"; // Kembalikan batas tinggi
        description.style.webkitLineClamp = "2"; // Aktifkan line-clamp
        button.textContent = "Show More"; // Ubah teks tombol kembali
      }
    }
  });
};

// Panggil fungsi untuk generate kartu
document.addEventListener("DOMContentLoaded", () => {
  generateCards(".container-product");
});
