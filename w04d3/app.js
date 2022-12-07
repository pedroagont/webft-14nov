console.log('hi from app js!');

// VANILLA JS
// const myForm = document.getElementById('my-form');
// const myData = document.getElementById('data');
// const moves = document.getElementById('moves');

// myForm.addEventListener('submit', (event) => {
//   //   console.log(event);
//   event.preventDefault();

//   console.log('Hello from submit!');

//   fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);

//       myData.innerHTML = data.name;
//       for (const mv of data.moves) {
//         const moveListItem = `<li>${mv.move.name}</li>`;
//         moves.innerHTML += moveListItem;
//       }

//     });
// });

// JQUERY
$('#my-form').submit((event) => {
  event.preventDefault();
  console.log('Hello from jquery form!');

  const pokemonName = $('#pokemon-input').val();
  if (!pokemonName) {
    return $('#error').css('color', 'red').text('Pokemon name is missing');
  }

  $.ajax({ url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}` })
    .then((result) => {
      console.log(result);

      $('#data').text(result.name);

      for (const mv of result.moves) {
        const moveListItem = `<li>${mv.move.name}</li>`;
        $('#moves').append(moveListItem);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
