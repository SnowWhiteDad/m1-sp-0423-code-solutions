const width = 24;
const height = 13;
const area = width * height;
console.log('value of area is: ', area);
console.log('typeof area: ', typeof area);

const bill = 550;
const payment = 860;
const change = payment - bill;
console.log('value of change is: ', change);
console.log('typeof change: ', typeof change);

const quizzes = 5;
const midterm = 4.99;
const final = 4.98;
const grade = (quizzes + midterm + final) / 3;
console.log('value of grade is: ', grade);
console.log('typeof grade: ', typeof grade);

const firstName = 'Cristiano';
const lastName = 'Messi';
const fullName = firstName + ' ' + lastName;
console.log('value of fullName is: ', fullName);
console.log('typeof fullName: ', typeof fullName);

const pH = 6;
const isAcidic = pH < 7;
console.log('isAcidic: ', isAcidic);
console.log('typeof isAcidic: ', typeof isAcidic);

const headCount = 300;
const isSparta = headCount === 300;
console.log('isSparta: ', isSparta);
console.log('typeof isSparta: ', typeof isSparta);

let motto = fullName;
motto += ' is the GOAT';
console.log('motto: ', motto);
console.log('typeof motto: ', typeof motto);
