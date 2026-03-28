// export 
const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    const [first, last] = fullName.split(' ');
    this.firstName = first;
    this.lastName = last;
  },
};
