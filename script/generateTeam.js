// Fungsi untuk membuat kartu tim
function generateCardTeam(containerSelector, teamData) {
    const container = document.querySelector(containerSelector);
  
    if (!container) {
      console.error("Container tidak ditemukan!");
      return;
    }
  
    // Tambahkan setiap anggota tim ke dalam container
    container.innerHTML = teamData
      .map(
        (member) => `
        <div class="card-team">
          <div class="column" style="--clr: ${member.clr}">
            <div class="image">
              <img src="${member.photo}" alt="${member.name}" />
            </div>
            <div class="container-name">
              <h5>${member.name}</h5>
              <p>${member.description}</p>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }
  
  // Data tim
  const teamData = [
    { photo: "../assets/img/m.png", name: "Manik", description: "Digital Creative", clr: "#43535d" },
    { photo: "../assets/img/d.png", name: "Deya", description: "Marketing", clr: "#fd8b51" },
    { photo: "../assets/img/i.png", name: "Indra", description: "Operasional", clr: "#ffeead" },
    { photo: "../assets/img/c.png", name: "Chelsea", description: "Production", clr: "#91ab8c" },
    { photo: "../assets/img/a.png", name: "Anggun", description: "Finance", clr: "#629584" },
  ];
  
  // Panggil fungsi untuk membuat kartu
  generateCardTeam(".container-team", teamData);
  