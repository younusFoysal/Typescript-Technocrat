function getEmployeeCity(employee: { address?: { city?: string } }): string | undefined {
    return employee?.address?.city;
}

const udata = {
    address: {
        city: "ctg"
    }
}

console.log(getEmployeeCity(udata))