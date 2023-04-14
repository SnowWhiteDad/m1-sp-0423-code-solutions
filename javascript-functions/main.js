function convertMinutesToSeconds(mins) {
  const seconds = mins * 60;
  return seconds;
}

function greet(name) {
  return 'Hey, ' + name;
}

function getArea(width, height) {
  return width * height;
}

function getFirstName(person) {
  return person.firstName;
}

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('5 minutes to seconds: ', convertMinutesToSeconds(5));
console.log('greet Beavis: ', greet('Beavis'));
console.log('area of a 17 by 42 rectangle is: ', getArea(17, 42));
console.log(
  'The first name for Lelouche Lamperouge is: ',
  getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' })
);
console.log(
  "the last element in the array ['propane', 'and', 'propane', 'accessories'] is: ",
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
