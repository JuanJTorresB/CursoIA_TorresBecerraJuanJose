const url = "https://rickandmortyapi.com/api/character";

const button_buscar = document.querySelector("#buscar_buttton");
const search_bar = document.querySelector("#search_bar");
const card_container = document.querySelector(".cards-container");

// /?page=1
// /?name=rick

const get_searched_characters = async (search_bar) => {
  try {
    res = await fetch(url + `?name=${search_bar}`);
    data = await res.json();
    data.results.forEach((char) => {
      const card = document.createElement("div");
      card.classList.add("card");

      const img = document.createElement("img");
      img.src = char.image;
      img.alt = char.name;

      const h3 = document.createElement("h3");
      h3.textContent = char.name;

      const p = document.createElement("p");
      p.textContent = `Estado: ${char.status}`;

      card.append(img, h3, p);
      card_container.append(card);
    });
  } catch (error) {
    console.error(error);
    card_container.innerHTML = "<div class='not-found'><h3>Personaje No Encontrado</h3></div>";
  }
};

const handle_buscar = () => {
  card_container.innerHTML = "";
  get_searched_characters(search_bar.value);
};

button_buscar.addEventListener("click", handle_buscar);
