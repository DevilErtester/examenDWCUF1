// window.addEventListener('DOMContentLoaded', main);
// function main() {

//   boto.addEventListener('click', transform);


// }

// function transform() {
//   let stringVoc = document.getElementById('entrada').value;
//   let arrayVoc = ['o', 'ó', 'ò', 'ô', 'ö'];
//   let stringFin = '';
//   let trobat = 0;
//   let printed = 0;
//   let f = 0;
//   for (var i = 0; i <= stringVoc.length - 1; i++) {
//     printed = 0;
//     trobat = 0;
//     for (f = 0; !printed && !trobat && f <= arrayVoc.length; f++) {
//       if (stringVoc.charAt(i) != arrayVoc[f]) {
//         stringFin += stringVoc.charAt(i);
//         printed = 1;
//       } else {
//         stringFin += stringVoc.charAt(i).toUpperCase();
//         trobat = 1;

//       }
//     }
//   }

//   document.getElementById('sortida').textContent = (stringFin);
// }
window.addEventListener('DOMContentLoaded', main);
function main() {
  boto.addEventListener('click', transform);
}

function transform() {
  let stringVoc = document.getElementById('entrada').value;
  let arrayVoc = ['o', 'ó', 'ò', 'ô', 'ö'];
  let stringFin = '';
  let trobat = 0;
  let f = 0;
  for (var i = 0; i <= stringVoc.length - 1; i++) {
    trobat = 0;
    for (f = 0; !trobat && f <= arrayVoc.length; f++) {
      if (stringVoc.charAt(i) == arrayVoc[f]) {
        stringFin += stringVoc.charAt(i).toUpperCase();
        trobat = 1;
      }
    }
    if (!trobat) {
      stringFin += stringVoc.charAt(i);
    }
  }

  document.getElementById('sortida').textContent = (stringFin);

}