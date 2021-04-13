import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console

const result = (operation, num) => {
  if(operation) {
      return operation(num);
    }
    return num;
}

function five(operation) {
  return result(operation, 5);
}

function seven(operation) {
  if(operation) {
    return operation(7);
  }
  return 7;
}


function minus(second) {
  return (first) => first - second;
}


const a = seven(minus(five())); // must return 49

console.log(a);


