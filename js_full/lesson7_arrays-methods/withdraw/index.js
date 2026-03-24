function withdraw(clients, balances, client, amount) {
  const index = clients.indexOf(client);
  // findIndex((person) => person === client);
  return balances[index] >= amount ? balances[index] - amount : -1;
}
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
