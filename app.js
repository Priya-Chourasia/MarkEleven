const dateofBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checknumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.value = "you are lucky";
  }
  else {
    outputBox.value = "oh no! not so lucky";
  }
}
function checknumberisLucky() {
  const date = dateofBirth.value;
  const sum = calculateSum(date);
  if ((Math.sign(luckyNumber.value) === -1))
    outputBox.value = "Please enter a positive lucky number! ";
  else if (date && luckyNumber.value)
    compareValues(sum, luckyNumber.value)
  else
    outputBox.value = "please enter both date of birth and lucky number";
}
function calculateSum(date) {
  date = date.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < date.length; index++) {
    sum = sum + Number(date.charAt(index))
  }
  return sum;
}

checknumberButton.addEventListener('click', checknumberisLucky)