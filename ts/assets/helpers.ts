/* eslint-disable import/prefer-default-export */
export function doDeclensionOfWord(number: number, words: string[]): string {
  const stringifiedNumber = number.toString();
  const isEndOnOne = stringifiedNumber[stringifiedNumber.length - 1] === '1';
  const isNotEqualEleven = number !== 11;
  if (isEndOnOne && isNotEqualEleven) return words[0];

  const numberLength = stringifiedNumber.length;
  const isEndNumberMoreThenOne = Number.parseInt(stringifiedNumber[numberLength - 1], 10) > 1;
  const isEndNumberLessThenFour = Number.parseInt(stringifiedNumber[numberLength - 1], 10) <= 4;
  const isEndNumberBetweenTwelveAndFourteen = number < 12 || number > 14;
  const isSecondWord = isEndNumberMoreThenOne && isEndNumberLessThenFour && isEndNumberBetweenTwelveAndFourteen;
  if (isSecondWord) return words[1];

  return words[2];
}

export function formateNumber(number: number): string {
  return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}
