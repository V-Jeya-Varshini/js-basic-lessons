import { currencies } from "../js/currencies.js";
import { getOptions } from "../js/handlers.js";
import { myFunction } from "../js/money.js";

const primaryCurrency = document.getElementById("first");
const secondaryCurrency = document.getElementById("second");
primaryCurrency.innerHTML = getOptions(currencies);
secondaryCurrency.innerHTML = getOptions(currencies);
document.getElementById("amt").addEventListener("change", myFunction);