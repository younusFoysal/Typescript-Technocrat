function reverseString(input: string): string {
    return input.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"
