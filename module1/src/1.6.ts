
// function
function add(num1 : number, num2 : number ) : number {
    return num1 + num2;
}
add(1, 2);

// arrow function
const addArrow = (num1:number, num2:number) : number => num1 + num2;
addArrow(1,2)

// obj -> function -> method
const newUser = {
    name: "John",
    balance: 0,
    addBalance(balance:number): string {
        return `My Balance: ${this.balance + balance}`;
    }
}


//    -------------- Solve this like a noob
