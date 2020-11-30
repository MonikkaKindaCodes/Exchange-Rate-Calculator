
const currencyElementOne = document.getElementById('currency-one');
const amountElementOne = document.getElementById('amount-one');
const currencyElementTwo = document.getElementById('currency-two');
const amountElementTwo = document.getElementById('amount-two');
const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch Exchange Rates and Updates the DOM
function calculate () {
   const currency_one = currencyElementOne.value;
   const currency_two = currencyElementOne.value;

   console.log(currency_one, currency_two);
}



//Event Listeners
currencyElementOne.addEventListener('change', calculate);
amountElementOne.addEventListener('input', calculate);
currencyElementTwo.addEventListener('change', calculate);
amountElementTwo.addEventListener('input', calculate);

calculate();
