const fs = require("fs").promises;

async function processInput() {
  const leftArray = [];
  const rightArray = [];

  try {
    const data = await fs.readFile("day01/input.txt", "utf8");
    data
      .split("\n") // Split by new line
      .filter((line) => line.trim() !== "") // Remove empty lines
      .forEach((line) => {
        const [left, right] = line.trim().split(/\s+/).map(Number); // Split by space or tab and convert to numbers
        leftArray.push(left);
        rightArray.push(right);
      });

    return [leftArray, rightArray];
  } catch (err) {
    console.error("Error reading the file:", err);
  }
}

(async () => {
  const [leftArray, rightArray] = await processInput();

  let similarityScore = 0;

  for (let i = 0; i < leftArray.length; i++) {
    const result = rightArray.filter((number) => number === leftArray[i]);
    similarityScore += leftArray[i] * result.length;
  }

  console.log(similarityScore);
})();
