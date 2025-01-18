const Price = document.querySelector("#price");
const Money = document.querySelector("#money");
const calculate = document.querySelector(".calculate");
const output = document.querySelector(".output");
function MoneyToGram() {
  let PriceF = 0;
  let MoneyF = 0;
  Price.addEventListener("input", (e) => {
    PriceF = parseInt(e.target.value);
  });
  Money.addEventListener("input", (e) => {
    MoneyF = parseInt(e.target.value);
  });
  calculate.addEventListener("click", () => {
    ButtonRun();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "enter") {
      ButtonRun();
    }
  });
  function ButtonRun() {
    if (PriceF > 0 && MoneyF > 0) {
      const FinalValueStore = (MoneyF / PriceF) * 1000;
      output.innerText = `${FinalValueStore} Grams`;
    }
  }
}
// Gram to moeny
const pe = document.querySelector(".pe");
const my = document.querySelector(".my");
const st = document.querySelector(".st");
const ot = document.querySelector(".ot");
let PriceStoreG = 0;
let GramStoreG = 0;
function GramToMoney() {
  pe.addEventListener("input", (e) => {
    PriceStoreG = parseInt(e.target.value);
  });
  my.addEventListener("input", (e) => {
    GramStoreG = parseInt(e.target.value);
  });
  st.addEventListener("click", () => {
    if (PriceStoreG > 0 && GramStoreG >= 0) {
      const FinalOutput = (GramStoreG * PriceStoreG) / 1000;
      ot.innerText = `${FinalOutput} Ruppes`;
    }
  });
}
MoneyToGram();
GramToMoney();

