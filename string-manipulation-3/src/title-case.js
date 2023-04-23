/* exported titleCase */

// define a function named titleCase
// that takes a string named title as an argument
// returns the string with the first letter of each word capitalized
// capitalize the first letter of each word in the title and any sub-title
// capitalize all major words in the title
// capitalialize all words in hyphenated major words
// capitalize all words of four letters or more
// set minor words of three letters or less to lowercase as long as they are not first word in the title

// ----   define function titleCase(title)  ---
//          define the function titleCase(title) that takes in a title string as an argument
//          define a variable named mainAndSubtitle and assign an empty string to it
//            check if the title is not empty
//              if the title is not empty, check if the title includes a colon
//                if the title includes a colon, split the title into title and subtitle separated by a colon using splitTitle function
//                    assign the two-element array of title and subtitle to a variable named titleParts
//                    capitalize the first element of the titleParts array, using capitalizeWords function and removeEmptyStrings function
//                       assign the capitalized title to a variable named mainTitle
//                    capitalize the second element of the titleParts array, using capitalizeWords function and removeEmptyStrings function
//                       assign the capitalized subtitle to a variable named subTitle
//                    concatenate the mainTitle and subTitle separated by ': " into a string
//                       assign the concatenated string to a variable named mainAndSubtitle
//                    return the mainAndSubtitle
//                else
//                    capitalize the title using capitalizeWords function and removeEmptyStrings function
//                       assign the capitalized title to a variable named title
//                    return the title

function titleCase(title) {
  let mainAndSubtitle = '';
  if (title !== '') {
    if (title.includes(':')) {
      const titleParts = splitTitle(title);
      const mainTitle = capitalizeWords(
        removeEmptyStrings(titleParts[0].split(' '))
      );
      const subTitle = capitalizeWords(
        removeEmptyStrings(titleParts[1].split(' '))
      );
      mainAndSubtitle = mainTitle + ': ' + subTitle;
      return mainAndSubtitle;
    } else {
      mainAndSubtitle = capitalizeWords(removeEmptyStrings(title.split(' ')));
      return mainAndSubtitle;
    }
  }
}

// ------ define function splitTitle(string) ----------
//            define function splitPunctuation that takes a string as an argument
//            returns a two-element array of string before the colon punctuation and string after the colon punctuation
//              define a variable named array that is assigned the splits of the input string into an array of words using the split method with a colon as the separator
//            return the array

function splitTitle(string) {
  const array = string.split(':');
  return array;
}

// ------- define function removeEmptyStrings(array) --------
//           define function splitPunctuation that takes a array as an argument
//             define a variable newArray and assign it an empty array
//             iterate through the input array using a for loop
//               start the counter at 0 to array.length-1
//               check if the array element at index i is not an empty string
//                 if the array element at index i is not an empty string, push it to the newArray
//             return the newArray

function removeEmptyStrings(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== '') {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// ------- define function capitalizeWords(array) ------
//           define function named capitalizeWords that takes an array named array as an argument
//              define a new array variable named newArray and assign it an empty array
//              iterate through the input array using a for loop
//                  start the counter i at 0 to array.length-1
//                  check if the array element at index i is a major word, with punctuation removed and converted toUpperCase, is strictly equal to 'API'
//                     if true, assign 'API' concatenated with the removed punctuation to the newArray at index i
//                  else repeat check the array element at index i, with punctuation removed and converted toUpperCase, is strictly equal to any of 'CSS', 'HTML', 'JSON', 'JQUERY' or 'JAVASCRIPT'
//                     if true, assign the hardcoded word (CSS, HTML, JSON, JQuery or JavaScript) concatenated with the removed punctuation to the newArray at index i
//                  else check if the array element at index i contains a hyphen using the includes method
//                     if true, assign the capitalized hyphenated word to the newArray at index i using the capitalizeHyphenatedWords function
//                  else check if the array element at index i is a major word, using the isMajorWord function
//                     if true, assign the capitalized word in array at element i to the newArray at index i using the capitalize function
//                 else check if the array element at index is a preposition word using isPrepositionWord with lowercased array element at index i
//                     if true, assign the lowercased array element at index i to the newArray at index i
//                 else check if the length of the array element at index i is less tnan or equal to 3 and it is not the first word in the title and it is not a major word
//                     if true, assign the lowercased array element at index i to the newArray at index i
//                 else, assign the capitalized array element at index i to the newArray at index i
//              return the newArray as a string using the join method using a space as the separator

function capitalizeWords(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (splitPunctuation(array[i])[0].toUpperCase() === 'API') {
      newArray[i] =
        splitPunctuation(array[i])[0].toUpperCase() +
        splitPunctuation(array[i])[1];
    } else if (splitPunctuation(array[i])[0].toUpperCase() === 'CSS') {
      newArray[i] =
        splitPunctuation(array[i])[0].toUpperCase() +
        splitPunctuation(array[i])[1];
    } else if (splitPunctuation(array[i])[0].toUpperCase() === 'HTML') {
      newArray[i] =
        splitPunctuation(array[i])[0].toUpperCase() +
        splitPunctuation(array[i])[1];
    } else if (splitPunctuation(array[i])[0].toUpperCase() === 'JSON') {
      newArray[i] =
        splitPunctuation(array[i])[0].toUpperCase() +
        splitPunctuation(array[i])[1];
    } else if (splitPunctuation(array[i])[0].toUpperCase() === 'JQUERY') {
      newArray[i] = 'JQuery' + splitPunctuation(array[i])[1];
    } else if (splitPunctuation(array[i])[0].toUpperCase() === 'JAVASCRIPT') {
      newArray[i] = 'JavaScript' + splitPunctuation(array[i])[1];
    } else if (array[i].includes('-')) {
      newArray[i] = capitalizeHyphenatedWords(array[i]);
    } else if (isMajorWord(array[i].toLowerCase())) {
      newArray[i] = capitalize(array[i]);
    } else if (isPreposition(array[i].toLowerCase())) {
      newArray[i] = array[i].toLowerCase();
    } else if (
      array[i].length <= 3 &&
      i !== 0 &&
      !isMajorWord(array[i].toLowerCase())
    ) {
      newArray[i] = array[i].toLowerCase();
    } else {
      newArray[i] = capitalize(array[i]);
    }
  }
  return newArray.join(' ');
}

// ------ define function splitPunctuation(string) ------
//          define function splitPunctuation that takes a string as an argument
//            define a variable array and assign it an array of the split string using the split method with spaces as the separator
//            define a variable newArray and assign it an empty array
//            iterate through the array using a for loop
//              start the counter at 0 to array.length-1
//              check if the array element at index i ends with a punctuation mark using the endsWithPunctuation function
//              if the endsWithPunctuation function returns true
//                assign the array element at index i with the last character removed to the first index of the newArray using the slice method
//                assign the punctuation mark of the array element at index i to the second index of the newArray using the slice method
//              else
//                assign the array element at index i to the first index of newArray
//                assign an empty string to the second index of the newArray
//            return the newArray

function splitPunctuation(string) {
  const array = string.split(' ');
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (endsWithPunctuation(array[i])) {
      newArray[0] = array[i].slice(0, array[i].length - 1);
      newArray[1] = array[i].slice(array[i].length - 1);
    } else {
      newArray[0] = array[i];
      newArray[1] = '';
    }
  }
  return newArray;
}

// ------ define function endsWithPunctuation(string) ------
//          define a function named endsWithPunctuation that takes a string as an argument
//            and returns a boolean value if the string ends with a punctuation mark
//            use the charAt method to get the last character of the string
//            return true if the last character is a punctuation mark (among the list of known punctuation marks), false otherwise

function endsWithPunctuation(string) {
  return (
    string.charAt(string.length - 1) === '.' ||
    string.charAt(string.length - 1) === '?' ||
    string.charAt(string.length - 1) === '!' ||
    string.charAt(string.length - 1) === ';' ||
    string.charAt(string.length - 1) === ':' ||
    string.charAt(string.length - 1) === ',' ||
    string.charAt(string.length - 1) === '"' ||
    string.charAt(string.length - 1) === "'" ||
    string.charAt(string.length - 1) === ')' ||
    string.charAt(string.length - 1) === ']' ||
    string.charAt(string.length - 1) === '}' ||
    string.charAt(string.length - 1) === '>' ||
    string.charAt(string.length - 1) === '<' ||
    string.charAt(string.length - 1) === '-' ||
    string.charAt(string.length - 1) === '_' ||
    string.charAt(string.length - 1) === '+' ||
    string.charAt(string.length - 1) === '=' ||
    string.charAt(string.length - 1) === '*' ||
    string.charAt(string.length - 1) === '&' ||
    string.charAt(string.length - 1) === '%' ||
    string.charAt(string.length - 1) === '$' ||
    string.charAt(string.length - 1) === '#' ||
    string.charAt(string.length - 1) === '@' ||
    string.charAt(string.length - 1) === '!' ||
    string.charAt(string.length - 1) === '~' ||
    string.charAt(string.length - 1) === '`' ||
    string.charAt(string.length - 1) === '^' ||
    string.charAt(string.length - 1) === '|' ||
    string.charAt(string.length - 1) === '\\' ||
    string.charAt(string.length - 1) === '/' ||
    string.charAt(string.length - 1) === '?' ||
    string.charAt(string.length - 1) === '"'
  );
}

// --------- define a function capitalizeHyphenatedWords(string) ------
//          define a function capitalizeHyphenatedWords(string)
//            define a variable array to store the split string, using the split method with an hyphen as the separator
//            define a variable newArray and assign emoty array
//            iterate through the array using for loop
//              start at index 0 and end at the last index of the array
//              assign the capitalized word of the array element at index i to the newArray at index i
//            return the newArray converted to a string using join method and an hyphen as the separator

function capitalizeHyphenatedWords(string) {
  const array = string.split('-');
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = capitalize(array[i]);
  }
  return newArray.join('-');
}

// ------ define the the isPreposition function ------
//          define the isPreposition function that takes in a string
//          return a boolean value indicating if the string is strictly equal to any word in the preposition list using or operator
function isPreposition(string) {
  return (
    string === 'to' ||
    string === 'at' ||
    string === 'at' ||
    string === 'on' ||
    string === 'in' ||
    string === 'for' ||
    string === 'by' ||
    string === 'with' ||
    string === 'from' ||
    string === 'of' ||
    string === 'over' ||
    string === 'under' ||
    string === 'out' ||
    string === 'about' ||
    string === 'between' ||
    string === 'through' ||
    string === 'after' ||
    string === 'before' ||
    string === 'above' ||
    string === 'below' ||
    string === 'to' ||
    string === 'from' ||
    string === 'up' ||
    string === 'down' ||
    string === 'over' ||
    string === 'under' ||
    string === 'through' ||
    string === 'above' ||
    string === 'below'
  );
}

// ------ define the function capitalize(string) ------
//       define the function capitalize that takes a string as an argument
//         use charAt to get the first letter of the string, and use toUpperCase to convert it to uppercase
//         concatenate the first letter to the rest of the string converted to lowercase using slice method and toLowerCase
//         return the new concatenated string

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

// ------- define the function isMajorWord(string) ----------
//   define the function isMajorWord that takes a string as an argument
//      return true if the string is any of the major words in the list using or operator
function isMajorWord(string) {
  return (
    string === 'web' ||
    string === 'pop' ||
    string === 'cat' ||
    string === 'hat' ||
    string === 'ham' ||
    string === 'i' ||
    string === 'pet'
  );
}
