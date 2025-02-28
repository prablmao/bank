let balance = 0;

const balanceDisplay = document.getElementById("balance");
const addMoneyButton = document.getElementById("addMoneyButton");
const transferButton = document.getElementById("transferButton");
const amountInput = document.getElementById("amount");

addMoneyButton.addEventListener("click", () => {
    // Infinite money
    balance += 1000; // You can change this value to whatever you want
    updateBalance();
});

transferButton.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    balance -= amount;  // Fake transaction logic
    updateBalance();
});

function updateBalance() {
    balanceDisplay.textContent = `$${balance}`;
}
