function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(`Tiền tip cho hóa đơn 100 là: ${calcTip(100)}`);

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log('Hóa đơn:', bills);
console.log('Tiền tip:', tips);
console.log('Tổng cộng:', total);
