/* student object */
const student = {
  firstName: 'Ola',
  lastName: 'Sh2',
  age: 46,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = true;
student.previousOccupation = 'Engineering';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ',
  student.previousOccupation
);
console.log('value of student: ', student);

/* vehicle object */
const vehicle = {
  make: 'Tesla',
  model: 'Model X',
  year: 2020,
};
vehicle['color'] = 'midnight silver';
vehicle['isConvertible'] = false;
console.log("value of vehicle['color']: ", vehicle['color']);
console.log("value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('value of vehicle: ', vehicle);

/* pet object */
const pet = {
  name: 'Rufus',
  type: 'German Shepherd',
};
delete pet.name;
delete pet.type;
console.log('value of pet: ', pet);
