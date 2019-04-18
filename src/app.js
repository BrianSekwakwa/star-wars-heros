const heroCard = document.querySelectorAll(".hero__card__item");
const modal = document.querySelector(".modal");
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
  item.addEventListener("click", showModal);
});

close.forEach(item => {
  item.addEventListener("click", closeModal);
});

// Event functions
function showModal(e) {
  modal.style.display = "flex";
}

function closeModal(e) {
  modal.style.display = "none";
}
