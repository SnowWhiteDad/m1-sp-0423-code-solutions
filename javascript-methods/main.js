const a = [];

for (let i = 0; i < 3; i++) {
  a[i] = Math.floor(Math.random() * 100) + 1;
}
const maximumValue = Math.max(a[0], a[1], a[2]);
console.log(
  'maximum value in the array: [',
  a.toString(),
  '] is: ',
  maximumValue
);

const heroes = ['Iron Man', 'Flash', 'Spiderman', 'Batman'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('random index: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('random hero: ', randomHero);

const library = [
  { title: 'Spiritual Leadership', author: 'Oswald J.Sanders' },
  { title: 'Blink', author: 'Malcolm Glawell' },
  { title: 'The Lean Startup', author: 'Eric Ries' },
];

const lastBook = library.pop();
console.log('last book: ', lastBook);
const firstBook = library.shift();
console.log('first book: ', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('books in library: ', library);

const fullName = 'Ola Sh2';
const firstAndLastName = fullName.split(' ');
console.log('first and last name: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say my name: ', sayMyName);
