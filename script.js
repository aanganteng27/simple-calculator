function add() {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  const result = a + b;
  document.getElementById('result').innerText = `Result: ${result}`;
}
