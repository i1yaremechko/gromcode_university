export function withdraw(clients, balances, client, amount) {
  if (
    arguments.length !== 4 ||
    !Array.isArray(clients) ||
    !Array.isArray(balances) ||
    !clients.every(el => typeof el === 'string') ||
    !balances.every(el => Number.isFinite(el)) ||
    !Number.isFinite(amount)
  ) return null;
  const index = clients.indexOf(client);
  return balances[index] >= amount ? balances[index] - amount : -1;
}
