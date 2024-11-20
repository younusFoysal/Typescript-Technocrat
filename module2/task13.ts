function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]
