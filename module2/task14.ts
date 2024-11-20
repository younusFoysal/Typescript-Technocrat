type UserData = {
    name: string;
    age: number;
};

async function fetchUserData(): Promise<UserData> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Alice", age: 30 });
        }, 1000);
    });
}
