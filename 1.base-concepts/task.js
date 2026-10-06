"use strict"

// Задача 1
function solveEquation(a, b, c) {
  let arr = [];

  if(a === 0) {
    return arr;
  }

  const discriminant = b**2 - 4*a*c;

  if(discriminant < 0) {
    return arr;
  }
  
  if(discriminant === 0) {
    arr.push(-b / (2*a));
    return arr;
  }

  arr.push((-b + Math.sqrt(discriminant))/(2*a));
  arr.push((-b - Math.sqrt(discriminant))/(2*a));
  
  return arr;
}

console.log(solveEquation(2, 4, 7));
console.log(solveEquation(1, -2, 1));
console.log(solveEquation(1, -3, 2));

// Задача 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if(countMonths === 0) {
    return 0;
  }
  
  percent /= 100;
  const monthlyPercent = percent / 12;

  let credit = amount - contribution;

  const monthlyPayment = credit * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent)**countMonths) - 1)));
  
  const payment = monthlyPayment * countMonths;

  return (+(payment.toFixed(2)))
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));