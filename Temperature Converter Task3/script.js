function convertTemp() {
  const input = document.getElementById("tempInput").value;
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultOutput = document.getElementById("resultOutput");

  if (input === "") {
    resultOutput.innerText = "Please enter a number";
    return;
  }

  let temp = parseFloat(input);
  let result;

  if (from === "F") temp = (temp - 32) * 5 / 9;
  else if (from === "K") temp = temp - 273.15;

  if (to === "F") result = (temp * 9 / 5) + 32;
  else if (to === "K") result = temp + 273.15;
  else result = temp;

  resultOutput.innerText = `${result.toFixed(2)} °${to}`;
}
