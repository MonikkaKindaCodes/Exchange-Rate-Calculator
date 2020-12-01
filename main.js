const currencyElementOne = document.getElementById('currency-one');
const amountElementOne = document.getElementById('amount-one');
const currencyElementTwo = document.getElementById('currency-two');
const amountElementTwo = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


//Fetch Exchange Rate and Update DOM
function calculate () {
const currency_one = currencyElementOne.value;
const currency_two = currencyElementTwo.value;

fetch(`https://v6.exchangerate-api.com/v6/latest/${currency_one}`)
.then(res => res.json())
.then(data => {
 const rate = data.rates[currency_two];

 rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two} `;

 amountElementTwo.value = (amountElementOne.value * rate).toFixed(2);
});
}

//Event Listeners
currencyElementOne.addEventListener('change', calculate);
amountElementOne.addEventListener('input', calculate);
currencyElementTwo.addEventListener('change', calculate);
amountElementTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyElementOne.value;
    currencyElementOne.value = currencyElementTwo.value;
    currencyElementTwo.value = temp; 
    calculate();
})
calculate();