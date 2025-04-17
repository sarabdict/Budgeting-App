document.addEventListener("DOMContentLoaded", function () {
    const balanceElement = document.getElementById("balance");
    const addIncomeButton = document.getElementById("add-income");
    const addExpenseButton = document.getElementById("add-expense");
    const transactionList = document.getElementById("transaction-list");
    const settingsButton = document.getElementById("settingsButton");
    const heartButton = document.getElementById("heartButton");
    const spendingCtx = document.getElementById("spendingChart").getContext("2d");
    const spendingCtx2 = document.getElementById("spendingChart2").getContext("2d");
    const savingCtx = document.getElementById("savingChart").getContext("2d");

function changePage(page) {
    const content = document.querySelector(".center-content .content");

    // Change content based on clicked button
    switch (page) {
        case "dashboard":
                content.innerHTML = `<header><h1>Dashboard</h1></header>
                    <section class="balance-card">
                        <h2>Current Balance</h2>
                        <p class="balance" id="balance">$500</p>
                        <button id="add-income">+ Income</button>
                        <button id="add-expense">- Expense</button>
                        </section>
                    <section class="chart-container">
                        <h2>Spending Overview</h2>
                        <canvas id="spendingChart"></canvas>
                </section>`;
                break;
        case "subscriptions":
                content.innerHTML = `<header><h1>Subscriptions</h1></header>
                    <p>List of all your subscriptions goes here...</p>`;
                break;

        case "saving-goals":
                content.innerHTML = `<header><h1>Saving Goals</h1></header>
                    <p>Define your saving goals here...</p>`;
                break;

        case "expense-tracker":
                content.innerHTML = `<header><h1>Expense Tracker</h1></header>
                    <p>Track your expenses here...</p>`;
                break;
        case "accounts":
                content.innerHTML = `<header><h1>Accounts</h1></header>
                    <p>Manage your accounts here...</p>`;
                break;
        case "user":
                content.innerHTML = `<header><h1>User</h1></header>
                    <p>Manage your users here...</p>`;
                break;          
        case "settings":
               content.innerHTML = `<header><h1>Settings</h1></header>
                    <p>Adjust your settings here...</p>`;
                break;

        default:
                content.innerHTML = `<header><h1>Dashboard</h1></header>
                    <p>Welcome to your dashboard!</p>`;
                break;
    }
}
   document.querySelectorAll(".nav-btn").forEach(button => {
        button.addEventListener("click", function () {
            changePage(this.getAttribute("onclick").replace("changePage('", "").replace("')", ""));
        });
    });
    
    
    //const charttransitionButton = document.getElementById("charttransitionButton"); add flip chart button
    
    let balance = 500;
    
    const updateBalance = () => {
        balanceElement.textContent = `$${balance.toFixed(2)}`;
    };

        const addTransaction = (type, amount) => {
        const li = document.createElement("li");
        li.textContent = `${type}: $${parseFloat(amount).toFixed(2)}`;
        transactionList.appendChild(li);
    };
    
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
        if (amount && !isNaN(amount)) {
            balance -= parseFloat(amount);
            updateBalance();
            addTransaction("Expense", amount);
        }
    });


    new Chart(spendingCtx, {
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
        new Chart(spendingCtx2, {
        type: "doughnut",
        data: {
            labels: ["Rent", "Gas"],
            datasets: [{
                data: [30, 70],
                backgroundColor: "rgba(75, 192, 192, 1)"
            }]
        }
    });
        new Chart(savingCtx, {
        type: "doughnut",
        data: {
            labels: ["Saved", "Spent"],
            datasets: [{
                data: [30, 70],
                backgroundColor: "rgba(75, 192, 192, 1)"
            }]
        }
    });
if (heartButton) {
    heartButton.addEventListener("click", function () {
        alert("Hi luv 💖");
    });
}

if (settingsButton) {
    settingsButton.addEventListener("click", function () {
        console.log("Settings menu coming soon! Maybe light & dark mode?");
    });
} //added console.log instead of alert to see what happens 

    updateBalance();

});
