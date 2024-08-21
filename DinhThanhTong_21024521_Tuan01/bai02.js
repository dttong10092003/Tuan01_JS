function calculateBMI(mass, height) {
    return mass / (height * height);
}

// Dữ liệu 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95; 

let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// Dữ liệu 2
let markMass2 = 95; 
let markHeight2 = 1.88; 
let johnMass2 = 85; 
let johnHeight2 = 1.76; 

let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

function compareBMI(markBMI, johnBMI) {
    if (markBMI > johnBMI) {
        console.log(`BMI của Mark (${markBMI.toFixed(1)}) cao hơn của John (${johnBMI.toFixed(1)})!`);
    } else {
        console.log(`BMI của John (${johnBMI.toFixed(1)}) cao hơn của Mark (${markBMI.toFixed(1)})!`);
    }
}

// Gọi hàm để so sánh
compareBMI(markBMI1, johnBMI1);
compareBMI(markBMI2, johnBMI2);
