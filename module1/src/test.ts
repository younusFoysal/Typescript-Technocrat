let friends: string[] = ["foysal","foysal1"];


// obj
const user:{
    firstName: string;
    readonly lastName: string;
    email?: string; // optional
    password: string;
    phoneNumber: number;
    isManager?: boolean;
} = {
    firstName: "John",
    lastName: "Doe",
    password: "password",
    phoneNumber: 12345678,
}

user.lastName