const calculateButton = document.getElementById("calculate-button");
const billAmountInput = document.getElementById("bill-amount");
const tipPercentageInput = document.getElementById("tip-percentage");
const numberOfPeopleInput = document.getElementById("number-of-people");
const tipAmountElement = document.getElementById("tip-amount");
const totalCostElement = document.getElementById("total-cost");

calculateButton.addEventListener("click", () => {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value) / 100;
  const numberOfPeople = parseInt(numberOfPeopleInput.value, 10);

  const tipAmount = billAmount * tipPercentage;
  const totalCost = (billAmount + tipAmount) / numberOfPeople;

  tipAmountElement.textContent = `Tip amount: $${tipAmount.toFixed(2)}`;
  totalCostElement.textContent = `Total cost per person: $${totalCost.toFixed(2)}`;
});
