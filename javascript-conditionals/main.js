/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  return number < 5;
}

function startsWithJ(str) {
  return str[0] === 'J';
}

function isEven(number) {
  return number % 2 === 0;
}

function isOldEnoughToDrink(person) {
  return person.age > 21;
}

function isOldEnoughToDrive(person) {
  return person.age > 16;
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else return 'invalid pH level';
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'The Evil Dead';
    case 'drama':
      return 'Stand by Me';
    case 'musical':
      return 'Mama Mia';
    case 'sci-fi':
      return 'The Fifth Element';
    default:
      return 'Genre not recognisd. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
