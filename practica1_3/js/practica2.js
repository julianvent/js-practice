const TIP_PERCENTAGE = 0.1;

let totalInput = prompt("Enter the total bill amount:");
let total = Number(totalInput);

// 1 total can be NaN, as a user can enter any value
if (total) {
  let tipTotal = total * TIP_PERCENTAGE;
  console.log(`Total: $${total}\tTip total: $${tipTotal}`);
} else {
  console.error(`ERROR. The number entered is invalid. Input: ${totalInput}`);
}
