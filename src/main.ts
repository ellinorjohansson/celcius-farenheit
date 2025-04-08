import "./style.scss";

const farenheit = document.getElementById('inputFarenheit') as HTMLInputElement;
const convertButton = document.getElementById('calculateBtn') as HTMLButtonElement;
const result = document.getElementById('result') as HTMLParagraphElement;

convertButton.addEventListener('click', handleCalculasion);

function calculateCelcius(farenheit: number): number {
  return (farenheit - 32) * 5/6;
}

function handleCalculasion(): void {
  const farenheitValue = parseFloat(farenheit.value);

  if (isNaN(farenheitValue)) {
    result.textContent = 'Not a valid number';
    return;
  }
  const celciusValue = calculateCelcius(farenheitValue);

  result.textContent = `${farenheitValue} F is the same as ${celciusValue.toFixed(1)} C`;
}

convertButton.addEventListener('click', handleCalculasion);
