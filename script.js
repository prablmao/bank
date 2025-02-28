let balance = 0;
const balanceDisplay = document.getElementById("balance");
const addMoneyButton = document.getElementById("addMoneyButton");
const transferButton = document.getElementById("transferButton");
const amountInput = document.getElementById("amount");
const transactionHistory = document.getElementById("transactionHistory");

addMoneyButton.addEventListener("click", () => {
    balance += 1000;  // Add fake money
    updateBalance();
});

transferButton.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    balance -= amount;  // Fake transaction logic
    addTransaction(amount);
    updateBalance();
});

function updateBalance() {
    balanceDisplay.textContent = `$${balance}`;
}

function addTransaction(amount) {
    const transactionItem = document.createElement("li");
    transactionItem.innerHTML = `Transferred $${amount} <span>on ${new Date().toLocaleString()}</span>`;
    transactionHistory.appendChild(transactionItem);
}
