const mark = {
    fullName: 'Mark Miller',
    mass: 78, 
    height: 1.69, 

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92, 
    height: 1.95, 

    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName} có BMI (${mark.bmi.toFixed(1)}) cao hơn ${john.fullName} (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName} có BMI (${john.bmi.toFixed(1)}) cao hơn ${mark.fullName} (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`${mark.fullName} và ${john.fullName} có BMI bằng nhau (${mark.bmi.toFixed(1)})!`);
}
