function register() {
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    if (!email || !password) {
        alert("Please fill all fields");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users"));
    if (!users) users = {};

    if (users[email]) {
        alert("User already exists!");
        return;
    }

    // Save demo user
    users[email] = { password: password, balance: 0, profit: 0 };
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now login.");
}
