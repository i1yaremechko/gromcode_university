export const vehicle = {
  name: 'Argo',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

export const ship = {
  startMachine() {
    this.move();
    console.log(`${this.name} lifting anchor up`);
  },
  stopMaсhine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle,
};

Object.setPrototypeOf(ship, vehicle);
