const heroCard = document.querySelectorAll(".hero__card__item");
const modal = document.querySelector(".modal");
const modalItem = document.querySelector(".modal__item");
const heroUI = document.querySelector(".modal__item__content__results");
const spinner = document.querySelector(".modal__spinner");
const close = document.querySelectorAll(".close");

// Events
heroCard.forEach(item => {
  item.addEventListener("click", fetchData);
});

close.forEach(item => {
  item.addEventListener("click", closeModal);
});

// Event functions
function fetchData(e) {
  spinner.style.display = "block";

  setTimeout(() => {
    const id = e.target.parentElement.id;
    fetch(`https://swapi.co/api/people/?search=${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        dataUI(data);
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

function dataUI(data) {
  spinner.style.display = "none";
  modalItem.style.display = "grid";
  heroUI.innerHTML = `
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
  heroUI.innerHTML = "";
}
