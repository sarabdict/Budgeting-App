document.addEventListener("DOMContentLoaded", function () {
    const balanceElement = document.getElementById("balance");
    const addIncomeButton = document.getElementById("add-income");
    const addExpenseButton = document.getElementById("add-expense");
    const transactionList = document.getElementById("transaction-list");
    const settingsButton = document.getElementById("settingsButton");
    let balance = 500;

    addIncomeButton.addEventListener("click", function () {
        let amount = prompt("Enter income amount:");
        if (amount) {
            balance += parseFloat(amount);
            updateBalance();
            addTransaction("Income", amount);
        }
    });

    addExpenseButton.addEventListener("click", function () {
        let amount = prompt("Enter expense amount:");
        if (amount) {
            balance -= parseFloat(amount);
            updateBalance();
            addTransaction("Expense", amount);
        }
    });

    function updateBalance() {
        balanceElement.textContent = `$${balance}`;
    }

    function addTransaction(type, amount) {
        let li = document.createElement("li");
        li.textContent = `${type}: $${amount}`;
        transactionList.appendChild(li);
    }

    const ctx = document.getElementById("spendingChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [{
                label: "Expenses",
                data: [200, 350, 150, 500],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 2
            }]
        }
    });
  
settingsButton.addEventListener('click', function() {
        alert('There should be Setting options here. For example, idea: Light and Dark Mode');
    });
heartButton.addEventListener('click', function() {
        alert('Hi luv');
    });
});
