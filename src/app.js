const heroCard = document.querySelectorAll(".hero__card__item");
const modal = document.querySelector(".modal");
const heroUI = document.querySelector(".modal__item__content__results");
const close = document.querySelectorAll(".close");

// const hero = "obi";

// fetch(`https://swapi.co/api/people/?search=${hero}`)
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     console.log(
//       data.results[0].name,
//       data.results[0].birth_year,
//       data.results[0].gender,
//       data.results[0].height,
//       data.results[0].mass + "Kg",
//       data.results[0].hair_color,
//       data.results[0].eye_color,
//       data.results[0].skin_color,
//       fetch(`${data.results[0].homeworld}`)
//         .then(res => {
//           return res.json();
//         })
//         .then(data => {
//           console.log(data.name);
//         })
//     );
//   });

// Events
heroCard.forEach(item => {
  item.addEventListener("click", fetchData);
});

close.forEach(item => {
  item.addEventListener("click", closeModal);
});

// Event functions
function fetchData(e) {
  const id = e.target.parentElement.id;
  fetch(`https://swapi.co/api/people/?search=${id}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      dataUI(data);
    });

  // show the modal
  modal.style.display = "flex";
}

function dataUI(data) {
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

function openModal() {}

function closeModal(e) {
  modal.style.display = "none";
  heroUI.innerHTML = "";
}

// data.results[0].name,
// data.results[0].birth_year,
// data.results[0].gender,
// data.results[0].height,
// data.results[0].mass + "Kg",
// data.results[0].hair_color,
// data.results[0].eye_color,
// data.results[0].skin_color
