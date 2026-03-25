const getPeople = (obj) =>
  Object.values(obj).flat().map((person) => person.name);

const rooms = {
  room1: [
    { name: 'Sam' },
    { name: 'Ivan' },
    { name: 'Roman' },
  ],
  room2: [
    { name: 'Tom' },
  ],
  room3: [
    { name: 'Bob' },
  ]
};

console.log(getPeople(rooms));
