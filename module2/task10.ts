function getDisplayName(name: string | null | undefined): string {
    return name ?? "Anonymous";
}
console.log(getDisplayName(null)); // Output: "Anonymous"
console.log(getDisplayName("Alice")); // Output: "Alice"
