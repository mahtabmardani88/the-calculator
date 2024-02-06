function data(val) {
  calculate.display.value += val;
}
function ac() {
  calculate.display.value = "";
}
function c() {
  calculate.display.value = calculate.display.value.slice(0, -1);
}
function equal() {
  calculate.display.value = eval(calculate.display.value);
}

function calc(num1, num2, result) {
  switch (result) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
      case "%":
        return num1 % num2;
        break;
  }
  calc(result);
}
