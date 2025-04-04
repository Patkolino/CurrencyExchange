const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const convertedElement = document.querySelector(".js-convertedAmount");
const resetButton = document.querySelector(".js-resetButton");
const requestedElement = document.querySelector(".js-requestedAmount");
let paragraphResult = document.getElementById("js-paragraph");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const amount = amountElement.value;
    const currency = currencyElement.value;
    let result;
    let desiredCurrency = document.querySelector('input[name="desiredCurrency"]:checked').value;
    switch (true) {
        case ((currency === "EUR") && ((document.getElementById("form__radio1").checked))): alert("Please choose a different currency"); break;
        case ((currency === "EUR") && ((document.getElementById("form__radio2").checked))): result = amount * 1.082; break;
        case ((currency === "EUR") && ((document.getElementById("form__radio3").checked))): result = amount * 0.836; break;
        case ((currency === "EUR") && ((document.getElementById("form__radio4").checked))): result = amount * 4.185; break;

        case ((currency === "USD") && ((document.getElementById("form__radio1").checked))): result = amount * 0.924; break;
        case ((currency === "USD") && ((document.getElementById("form__radio2").checked))): alert("Please choose a different currency"); break;
        case ((currency === "USD") && ((document.getElementById("form__radio3").checked))): result = amount * 0.772; break;
        case ((currency === "USD") && ((document.getElementById("form__radio4").checked))): result = amount * 3.863; break;

        case ((currency === "GBP") && ((document.getElementById("form__radio1").checked))): result = amount * 1.195; break;
        case ((currency === "GBP") && ((document.getElementById("form__radio2").checked))): result = amount * 1.293; break;
        case ((currency === "GBP") && ((document.getElementById("form__radio3").checked))): alert("Please choose a different currency"); break;
        case ((currency === "GBP") && ((document.getElementById("form__radio4").checked))): result = amount * 5.004; break;

        case ((currency === "PLN") && ((document.getElementById("form__radio1").checked))): result = amount * 0.238; break;
        case ((currency === "PLN") && ((document.getElementById("form__radio2").checked))): result = amount * 0.258; break;
        case ((currency === "PLN") && ((document.getElementById("form__radio3").checked))): result = amount * 0.199; break;
        case ((currency === "PLN") && ((document.getElementById("form__radio4").checked))): alert("Please choose a different currency"); break;
    };
    requestedElement.innerText = `${amount} ${currency}`;
    convertedElement.innerText = `${result.toFixed(2)} ${desiredCurrency}`;
    paragraphResult.style.visibility = "visible";
});

resetButton.addEventListener("click", () => {
    convertedElement.innerText = "";
    paragraphResult.style.visibility = "hidden";
});