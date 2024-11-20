type User = {
    name: string;
    email: string;
};

type Admin = {
    adminLevel: number;
};

type AdminUser = User & Admin;

function describeAdmin(user: AdminUser): string {
    return `Admin: ${user.name}, Email: ${user.email}, Level: ${user.adminLevel}`;
}

const userpp = {
    name: "foysal",
    email: "foysal@gmail.com",
    adminLevel: 1,
}

console.log(describeAdmin(userpp));