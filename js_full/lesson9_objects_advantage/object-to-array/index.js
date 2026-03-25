const getCustomersList = (obj) => Object.entries(obj)
    .map(([id, user]) => ({ ...user, id }))
    .sort((a, b) => a.age - b.age);

const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    },
    'customer-id-3': {
        name: 'Kilian',
        age: 42
    }
}

console.log(getCustomersList(customers));
