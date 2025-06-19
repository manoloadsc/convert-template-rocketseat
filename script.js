// Cotação de moedas do dia
const USD = 5.25;
const EUR = 6.25;
const GBP = 7.25;


// Obtendo os elementos do Formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amount para recever somente os números
amount.addEventListener("input", () => { 

    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");
});

// Manipulando o select currency para receber somente as moedas
form.onsubmit = (event) => {
    
    event.preventDefault();

    switch(currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
}



// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

        let total = amount * price;
        result.textContent = formatCurrencyBRL(total);

        footer.classList.add("show-result");
    } catch (error) {
        footer.classList.remove("show-result");
        alert("Erro ao converter moeda");
        console.log(error);
    }
}

// Função para formatar a moeda
function formatCurrencyBRL(value) {
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}

