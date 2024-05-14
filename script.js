document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.getElementById('menu-items');
    const menuBurger = document.getElementById('menu-burger');

    if (!menuBurger || menuBurger.style.display === 'none') {
        menuItems.style.display = 'flex';
    }
    menuBurger.addEventListener('click', () => {
        menuItems.style.display = menuItems.style.display === 'none' ? 'flex' : 'none';
    });
});

function validateForm() {
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Перевірка заповненості усіх полів
    if (firstName === "" || lastName === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Перевірка email за допомогою регулярного виразу
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Перевірка співпадіння паролей
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    alert("Form is valid. Submitting data...");
}