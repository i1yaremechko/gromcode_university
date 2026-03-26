const sortContacts = (contacts, direction) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  let dir = direction;
  if (direction === undefined) {
    dir = true;
  }
  return contacts.sort((a, b) =>
    dir ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
  );
};

const contactsList = [
  {
    name: 'Suzy',
    phoneNumber: '222-222-22',
  },
  {
    name: 'Tom',
    phoneNumber: '222-222-22',
  },
  {
    name: 'Stephan',
    phoneNumber: '222-222-22',
  },
];

console.log(sortContacts(contactsList));
