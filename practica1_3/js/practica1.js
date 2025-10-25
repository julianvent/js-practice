// 1
let totalInput = prompt("Enter the total bill amount");

// 2
let total = Number(totalInput);

// 3
const TIP_PERCENTAGE = 0.1;
let tipTotal = total * TIP_PERCENTAGE;

// 4
console.log(`Total: $${total}\tTip total: $${tipTotal}`);
