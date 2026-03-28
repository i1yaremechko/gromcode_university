export const bind = (func, context, ...bindArgs) => {
  return function(...callArgs) {
    return func.apply(context, [...bindArgs, ...callArgs]);
  };
};

const obj = { name: 'Alice' };

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}`);
}

const boundGreet = bind(greet, obj, 'Привіт');
boundGreet();
