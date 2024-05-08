function incrementToken(currentToken) {
  const alphabet = currentToken.slice(0, 1);
  const number = currentToken.slice(1);

  let newNumber = "";

  if (isNumberStreak9(number)) {
    for (let i = 0; i < number.length; i++) {
      newNumber += "0";
    }
    // check if the alpha is Z
    if (alphabet === "Z") {
      return "A" + newNumber + "0";
    } else {
      return String.fromCharCode(alphabet.charCodeAt(0) + 1) + newNumber;
    }
  }

  // number is not 999
  else {
    newNumber = incrementNumeric(number);
    return alphabet + newNumber;
  }
}

function isNumberStreak9(number) {
  const length = number.length;
  for (i = 0; i < length; i++) {
    if (number.charAt(i) != "9") {
      return false;
    }
  }
  return true;
}

function isTrailingZero(number) {
  let trailingZeroIndex = 0;
  while (number.charAt(trailingZeroIndex) === "0") {
    trailingZeroIndex++;
  }
  return trailingZeroIndex === number.length;
}

function incrementNumeric(number) {
  let trailingZeroIndex = 0;
  while (number.charAt(trailingZeroIndex) === "0") {
    trailingZeroIndex++;
  }

  //   All zero
  if (trailingZeroIndex === number.length) {
    return "0".repeat(trailingZeroIndex - 1) + "1";
  }

  let realNumber = number.slice(trailingZeroIndex);
  let incrementNumber = parseInt(realNumber) + 1;

  if (incrementNumber.toString().length > realNumber.length) {
    trailingZeroIndex--;
  }
  return "0".repeat(trailingZeroIndex) + incrementNumber;
}

module.exports = incrementToken;
