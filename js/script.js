let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elBill = document.querySelector(".bill");
let elServiceFee = document.querySelector(".serviceFee");
let elAllBill = document.querySelector(".allBill");
let elAllServiceFee = document.querySelector(".allServiceFee");

const serviseHistory = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let inputValue = Number(elFormInput.value);

  let percent =
    inputValue >= 50 && inputValue <= 300
      ? (inputValue * 15) / 100
      : (inputValue * 20) / 100;

  let totalBill = percent + inputValue;
  serviseHistory.push(percent);

  elBill.textContent = `Harajatinggiz: ${inputValue}`;
  elBill.classList.remove("text-secondary");
  elBill.classList.add("text-darck");

  elServiceFee.textContent = `Xizmat haqqi: ${percent}`;
  elServiceFee.classList.remove("text-secondary");
  elServiceFee.classList.add("text-darck");

  elAllBill.textContent = `Umumiy hisob: ${totalBill}`;
  elAllBill.classList.remove("text-secondary");
  elAllBill.classList.add("text-darck");

  elAllServiceFee.textContent = `Servise history: ${serviseHistory}`;
  elAllServiceFee.classList.remove("text-secondary");
  elAllServiceFee.classList.add("text-darck");

  elFormInput.value = null;
});
