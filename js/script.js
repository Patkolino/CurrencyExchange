{
    const paragraphResult = document.getElementById("js-paragraph");

    const fromEur = (amount) => {
        switch (true) {
            case (document.getElementById("form__radio1").checked): return chooseDifferentCurrencyMessage();
            case (document.getElementById("form__radio2").checked): return amount * 1.082;
            case (document.getElementById("form__radio3").checked): return amount * 0.836;
            case (document.getElementById("form__radio4").checked): return amount * 4.185;
        };
    };

    const fromUsd = (amount) => {
        switch (true) {
            case (document.getElementById("form__radio1").checked): return amount * 0.924;
            case (document.getElementById("form__radio2").checked): return chooseDifferentCurrencyMessage();
            case (document.getElementById("form__radio3").checked): return amount * 0.772;
            case (document.getElementById("form__radio4").checked): return amount * 3.863;
        };
    };

    const fromGbp = (amount) => {
        switch (true) {
            case (document.getElementById("form__radio1").checked): return amount * 1.195;
            case (document.getElementById("form__radio2").checked): return amount * 1.293;
            case (document.getElementById("form__radio3").checked): return chooseDifferentCurrencyMessage();
            case (document.getElementById("form__radio4").checked): return amount * 5.004;
        };
    };

    const fromPln = (amount) => {
        switch (true) {
            case (document.getElementById("form__radio1").checked): return amount * 0.238;
            case (document.getElementById("form__radio2").checked): return amount * 0.258;
            case (document.getElementById("form__radio3").checked): return amount * 0.199;
            case (document.getElementById("form__radio4").checked): return chooseDifferentCurrencyMessage();
        };
    };

    const calculateResult = (amount, currency) => {
        switch (true) {
            case (currency === "EUR"): return fromEur(amount);
            case (currency === "USD"): return fromUsd(amount);
            case (currency === "GBP"): return fromGbp(amount);
            case (currency === "PLN"): return fromPln(amount);
        };
    };

    const updateResult = (currency, amount, result, desiredCurrency) => {
        const convertedElement = document.querySelector(".js-convertedAmount");
        const requestedElement = document.querySelector(".js-requestedAmount");
        requestedElement.innerHTML = `${amount} ${currency}`;
        convertedElement.innerHTML = `${result.toFixed(2)} ${desiredCurrency}`;
        paragraphResult.style.visibility = "visible";
    };

    const onResetFormClick = () => {
        paragraphResult.style.visibility = "hidden";
    };

    const chooseDifferentCurrencyMessage = () => {
        paragraphResult.style.visibility = "hidden";
        alert("Please choose a different currency");
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const amount = +amountElement.value;
        const currency = currencyElement.value;
        const desiredCurrency = document.querySelector('input[name="desiredCurrency"]:checked').value;        
        const result = calculateResult(amount, currency);
        updateResult(currency, amount, result, desiredCurrency);
    };

    const init = () => {
        const resetButton = document.querySelector(".js-resetButton");
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        resetButton.addEventListener("click", onResetFormClick);
    };

    init();

}