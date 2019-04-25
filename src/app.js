const hero = document.querySelectorAll(".hero__card__item__image img");
const modal = document.querySelector(".modal");
const modalItem = document.querySelector(".modal__item");
const heroImage = document.querySelector(".modal__item__images__img");
const heroData = document.querySelector(".modal__item__content__results");
const spinner = document.querySelector(".modal__spinner");
const close = document.querySelector(".close");

// Events
hero.forEach(item => {
  item.addEventListener("click", fetchData);
});

close.addEventListener("click", closeModal);

// Event functions
function fetchData(e) {
  spinner.style.display = "block";

  setTimeout(() => {
    const id = e.target.parentElement.parentElement.id;
    fetch(`https://swapi.co/api/people/?search=${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        dataUI(data, id);
      })
      .catch(err => {
        spinner.style.display = "none";
        modal.style.display = "none";
        modalItem.style.display = "none";
        alert(`Could not fetch data from API \n${err}`);
      });
  }, 1000);

  // show the modal
  openModal();
}

function dataUI(data, id) {
  spinner.style.display = "none";
  close.style.display = "block";
  modalItem.style.display = "grid";
  heroImage.innerHTML = `
    <picture>
      <source media="(max-width: 599.5px )" srcset="./assets/img/heros/${id}--small.jpg" />
      <img src="./assets/img/heros/${id}.jpg" alt="hero image" />
    </picture>
  `;
  heroData.innerHTML = `
    <h2>${data.results[0].name}</h2>
    <ul>
      <li><span>Birth Year:</span> ${data.results[0].birth_year}</li>
      <li><span>Gender:</span> ${data.results[0].gender}</li>
      <li><span>Height:</span> ${data.results[0].height}</li>
      <li><span>Mass(Kg):</span> ${data.results[0].mass}</li>
      <li><span>Hair Color:</span> ${data.results[0].hair_color}</li>
      <li><span>Eye Color:</span> ${data.results[0].eye_color}</li>
      <li><span>Skin Color:</span> ${data.results[0].skin_color}</li>
    </ul>
  `;
}

function openModal() {
  modal.style.display = "flex";
}

function closeModal(e) {
  modal.style.display = "none";
  modalItem.style.display = "none";
  spinner.style.display = "none";
  heroData.innerHTML = "";
}
