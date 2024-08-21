// Coding Challenge #1
console.log('Coding Challenge #1:')
function calculateBMI(mass, height) {
    return mass / (height * height);
}

function checkBMI(markBMI, johnBMI){
    return markBMI > johnBMI;
}

// Dữ liệu 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95; 

let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

let markHigherBMI1 = checkBMI(markBMI1,johnBMI1);

console.log('Dữ liệu 1:')
console.log(`BMI của Mark = ${markBMI1.toFixed(2)}, BMI John = ${johnBMI1.toFixed(2)}`);
console.log(`BMI của Mark cao hơn John: ${markHigherBMI1}`);


// Dữ liệu 2
let markMass2 = 95; 
let markHeight2 = 1.88; 
let johnMass2 = 85; // kg
let johnHeight2 = 1.76; // meters
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

let markHigherBMI2 = checkBMI(markBMI2,johnBMI2);

console.log('Dữ liệu 2:')
console.log(`BMI của Mark = ${markBMI2.toFixed(2)}, BMI John = ${johnBMI2.toFixed(2)}`);
console.log(`BMI của Mark cao hơn John: ${markHigherBMI2}`);
