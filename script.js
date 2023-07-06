//fetch('https://api.breakingbadquotes.xyz/v1/quotes')
// .then(res => res.json())
//.then(data => console.log(data))

//<script src="./script.js" defer></script>


/*
.then(res => {
  return res.json();
})
.then(data => {
  data.forEach(user => {
    const markup = `<li>${user.name}</li>`;

    document.querySelector('ul').insertAdjacentHTML(`beforeend`, markup)
  });
})
.catch(error => console.log(error));

*/
var arr = ['x', 'y', 'z']
var button = document.querySelector(".my-button");
var reset = document.querySelector(".my-reset");
var shuffled = shuffle(arr)
var index = 0;

button.addEventListener('click', function () {
  if (index < shuffled.length) {
    console.log(shuffled[index]);
    index++
  }
})

reset.addEventListener('click', function () {
  shuffled = shuffle(arr)
  index = 0;
})



function shuffle(str_or_arr) {
  var a = typeof str_or_arr == 'string' ? str_or_arr.split('') : str_or_arr
  var n = a.length;
  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return typeof str_or_arr == 'string' ? a.join('') : a;
}