// const TIP_PERCENTAGE = 0.1;

// let totalInput = prompt("Enter the total bill amount:");
// let total = Number(totalInput);

// // 1 total can be NaN, as a user can enter any value
// if (total) {
//   let tipTotal = total * TIP_PERCENTAGE;
//   console.log(`Total: $${total}\tTip total: $${tipTotal}`);
// } else {
//   console.error(`ERROR. The number entered is invalid. Input: ${totalInput}`);
// }

// 2
const billTotals = [50, 150, 20, 500, 75, 30];

// 3
const tips = [];

// 4, 5 & 6
for (let total of billTotals) {
  if (total > 75) tips.push(total * 0.1);
  else if (total >= 30) tips.push(total * 0.2);
  else tips.push(total * 0.3);
}

console.log(`Bill totals: ${billTotals}`)

for (let i = 0; i < billTotals.length; i++) {
  console.log(
    `${i + 1}. Total amount: $${billTotals[i]}\tTip total: $${tips[i]}`
  );
}
