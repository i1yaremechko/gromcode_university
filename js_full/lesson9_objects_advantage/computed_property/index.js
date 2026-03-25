/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

const addPropertyV2 = (obj, key, value) => Object.assign(obj, { [key]: value });

const addPropertyV3 = (obj, key, value) =>
  Object.assign({}, obj, { [key]: value });

const addPropertyV4 = (obj, key, value) => ({ ...obj, [key]: value });

// examples
const transaction = {
  value: 170,
};
console.log(addPropertyV1(transaction, 'currency', 'USD'));
console.log(transaction);
console.log(addPropertyV2(transaction, 'currency', 'EUR'));
console.log(transaction);
console.log(addPropertyV3(transaction, 'currency', 'UAH'));
console.log(transaction);
console.log(addPropertyV4(transaction, 'currency', 'POL'));
console.log(transaction);
