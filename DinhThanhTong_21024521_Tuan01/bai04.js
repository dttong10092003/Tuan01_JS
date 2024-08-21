function calculateTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bill1 = 275;
let bill2 = 40;
let bill3 = 430;

let tip1 = calculateTip(bill1);
let tip2 = calculateTip(bill2);
let tip3 = calculateTip(bill3);

let total1 = bill1 + tip1;
let total2 = bill2 + tip2;
let total3 = bill3 + tip3;

console.log(`Hóa đơn là ${bill1}, tiền tip là ${tip1}, và tổng số tiền là ${total1}`);
console.log(`Hóa đơn là ${bill2}, tiền tip là ${tip2}, và tổng số tiền là ${total2}`);
console.log(`Hóa đơn là ${bill3}, tiền tip là ${tip3}, và tổng số tiền là ${total3}`);
