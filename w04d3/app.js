console.log('hi from app js!');

const myForm = document.getElementById('my-form');
const myData = document.getElementById('data');
const moves = document.getElementById('moves');

myForm.addEventListener('submit', (event) => {
  //   console.log(event);
  event.preventDefault();

  console.log('Hello from submit!');

  fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (const mv of data.moves) {
        const moveListItem = `<li>${mv.move.name}</li>`;
        moves.innerHTML += moveListItem;
      }

      myData.innerHTML = JSON.stringify(data.name);
    });
});
