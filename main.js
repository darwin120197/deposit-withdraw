const depositBtn = document.getElementById("deposit__button"),
  inputDeposit = document.getElementById("input__deposit"),
  calculateMessageDeposit = document.getElementById(
    "calculate__message__deposit"
  ),
  withdrawBtn = document.getElementById("withdraw__button"),
  inputWithdraw = document.getElementById("input__withdraw"),
  calculateMessageWithdraw = document.getElementById(
    "calculate__message__withdraw"
  );

let availableBalance = 1000;

function deposit(amount) {
  availableBalance += amount;
  return availableBalance;
}

function withdraw(amount) {
  if (availableBalance >= amount) {
    availableBalance -= amount;
    return availableBalance;
  } else {
    return "Insufficient funds";
  }
}

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

depositBtn.addEventListener("click", () => {
  //Checks the deposit's input field value
  if (inputDeposit.value === "") {
    //Show message
    calculateMessageDeposit.textContent = "Please enter the amount!";

    //Add color red and remove color green
    calculateMessageDeposit.classList.remove("color-green");
    calculateMessageDeposit.classList.add("color-red");

    //Remove the message after three seconds
    setTimeout(() => {
      calculateMessageDeposit.textContent = "";
    }, 3000);
  } else {
    let depositedAmount = parseInt(inputDeposit.value);
    let newBalance = deposit(depositedAmount);

    //Show the deposited amount and the new balance
    calculateMessageDeposit.textContent = `You successfulyy deposited $${formatNumberWithCommas(
      depositedAmount
    )} and your new balance is $${formatNumberWithCommas(newBalance)}`;

    //Remove color red and add color green
    calculateMessageDeposit.classList.remove("color-red");
    calculateMessageDeposit.classList.add("color-green");

    //Remove the message and the deposit's input field value after three seconds
    setTimeout(() => {
      calculateMessageDeposit.textContent = "";
      inputDeposit.value = "";
    }, 3000);
  }
});

withdrawBtn.addEventListener("click", () => {
  //Checks the withdraw's input field value
  if (inputWithdraw.value === "") {
    //Show message
    calculateMessageWithdraw.textContent = "Please enter the amount!";

    //Add color red and remove color green
    calculateMessageWithdraw.classList.remove("color-green");
    calculateMessageWithdraw.classList.add("color-red");

    //Remove the message after three seconds
    setTimeout(() => {
      calculateMessageWithdraw.textContent = "";
    }, 3000);
  } else if (inputWithdraw.value > availableBalance) {
    //Show message
    calculateMessageWithdraw.textContent = "Insufficient funds!";

    //Add color red and remove color green
    calculateMessageWithdraw.classList.remove("color-green");
    calculateMessageWithdraw.classList.add("color-red");

    //Remove the message and the withdraw's input field value after three seconds
    setTimeout(() => {
      calculateMessageWithdraw.textContent = "";
      inputWithdraw.value = "";
    }, 3000);
  } else {
    let withdawAmount = parseInt(inputWithdraw.value);
    let remainingBalance = withdraw(withdawAmount);

    //Show withdraw amount and the remaining balance
    calculateMessageWithdraw.textContent = `You successfully withdraw $${formatNumberWithCommas(
      withdawAmount
    )} and your remaining balance is $${formatNumberWithCommas(
      remainingBalance
    )}`;

    //Remove color red and add color green
    calculateMessageWithdraw.classList.remove("color-red");
    calculateMessageWithdraw.classList.add("color-green");

    //Clear the message and the withdraw's input field after three seconds
    setTimeout(() => {
      calculateMessageWithdraw.textContent = "";
      inputWithdraw.value = "";
    }, 3000);
  }
});

console.log(inputDeposit.value, typeof inputDeposit.value);
