const testInput = [
  [7, 6, 4, 2, 1],
  [1, 2, 7, 8, 9],
  [9, 7, 6, 2, 1],
  [1, 3, 2, 4, 5],
  [8, 6, 4, 4, 1],
  [1, 3, 6, 7, 9],
];

function checkAndSetDirection(number1, number2) {
  let direction;
  let difference = number1 - number2;
  if (difference > 0) {
    direction = "decreasing";
  } else if (difference < 0) {
    direction = "increasing";
  } else {
    return null;
  }
  return direction;
}

function checkDistance(number1, number2) {
  let difference = Math.abs(number1 - number2);
  if (difference < 1) {
    return null;
  } else if (difference > 3) {
    return null;
  }
  return difference;
}

function checkArray(array) {
  const direction = checkAndSetDirection(array[0], array[1]);
  if (direction === null) {
    return;
  }
  for (let i = 0; i < array.length; i++) {}
}
