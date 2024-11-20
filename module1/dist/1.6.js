"use strict";
// function
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
// arrow function
const addArrow = (num1, num2) => num1 + num2;
addArrow(1, 2);
// obj -> function -> method
const newUser = {
    name: "John",
    balance: 0,
    addBalance(balance) {
        return `My Balance: ${this.balance + balance}`;
    }
};
