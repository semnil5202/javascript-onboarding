function problem1(pobi, crong) {
  var answer;
  const pobi2DArray = separateDigit(pobi);
  const crong2DArray = separateDigit(crong);
  return answer;
}

function separateDigit(pages) {
  const firstPage = String(pages[0])
    .split("")
    .map((i) => Number(i));
  const secondPage = String(pages[1])
    .split("")
    .map((i) => Number(i));
  return [firstPage, secondPage];
}

function sumOfPages(pages2D) {
  const sumOfFirstOne = pages2D[0].reduce((pre, cur) => pre + cur, 0);
  const sumOfSecondOne = pages2D[1].reduce((pre, cur) => pre + cur, 0);
  if (sumOfFirstOne > sumOfSecondOne) return sumOfFirstOne;
  else return sumOfSecondOne;
}

module.exports = problem1;
