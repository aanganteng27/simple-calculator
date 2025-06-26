function calculate(operator) {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  let result;

  if (isNaN(a) || isNaN(b)) {
    result = "Please enter valid numbers";
  } else {
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = b !== 0 ? a / b : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operation";
    }

    if (typeof result === 'number' && isFinite(result)) {
      addToHistory(a, operator, b, result);
    }
  }

  document.getElementById('result').innerText = `Result: ${result}`;
}

function clearFields() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').innerText = 'Result: ';
  document.getElementById('historyList').innerHTML = ''; // 🧼 clear history
}

function addToHistory(a, operator, b, result) {
  const historyList = document.getElementById('historyList');
  const listItem = document.createElement('li');
  listItem.textContent = `${a} ${operator} ${b} = ${result}`;
  historyList.prepend(listItem); // ⬆️ tampil paling atas
}
