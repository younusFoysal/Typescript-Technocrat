function displayUserInfo(name: string, age: number, role: 'admin' | 'user' | 'guest' = 'guest') {
    console.log(`Name: ${name}, Age: ${age}, Role: ${role}`);
}
displayUserInfo("Alice", 25, "admin");
displayUserInfo("Bob", 30);  // Role defaults to 'guest'
