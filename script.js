// Sumbmit button event handlre.
const loginbtn = document.getElementById("login");
loginbtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transctionArea = document.getElementById("transction-area");
  transctionArea.style.display = "block";
});

// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
  const depositNumber = getInputNumber("depositAmount");

  updateSpantext("currentDeposit", depositNumber);
  updateSpantext("currentBalance", depositNumber);

  document.getElementById("depositAmount").value = "";
});
// Withdraw button event handler

const withDrawBtn = document.getElementById("addWithdraw");
withDrawBtn.addEventListener("click", function () {
  const withDrawNumber = getInputNumber("withDrawAmount");

  updateSpantext("currentWithdraw", withDrawNumber);
  updateSpantext("currentBalance", -1 * withDrawNumber);
  document.getElementById("withDrawAmount").value = "";
});

function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

function updateSpantext(id, depositNumber) {
  const current = document.getElementById(id).innerText;
  const currentNumber = parseFloat(current);
  const total = depositNumber + currentNumber;
  document.getElementById(id).innerText = total;
}
