// Tính điểm trung bình
function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

// Hàm xác định đội thắng
function determineWinner(dolphinAverage, koalaAverage) {
    if (dolphinAverage > koalaAverage && dolphinAverage >= 100) {
        console.log('Đội Dolphins chiến thắng!');
    } else if (koalaAverage > dolphinAverage && koalaAverage >= 100) {
        console.log('Đội Koalas chiến thắng!');
    } else if (dolphinAverage === koalaAverage && dolphinAverage >= 100 && koalaAverage >= 100) {
        console.log('Hai đội hòa nhau!');
    } else {
        console.log('Không có đội nào chiến thắng do không đạt được điểm tối thiểu 100!');
    }
}

// Dữ liệu 1
let dolphinScore1 = 96, dolphinScore2 = 108, dolphinScore3 = 89;
let koalaScore1 = 88, koalaScore2 = 91, koalaScore3 = 110;

let dolphinAverage = calculateAverage(dolphinScore1, dolphinScore2, dolphinScore3);
let koalaAverage = calculateAverage(koalaScore1, koalaScore2, koalaScore3);

console.log(`Điểm trung bình của đội Dolphins: ${dolphinAverage}`);
console.log(`Điểm trung bình của đội Koalas: ${koalaAverage}`);

determineWinner(dolphinAverage, koalaAverage);

// Dữ liệu Bonus 1
dolphinScore1 = 97, dolphinScore2 = 112, dolphinScore3 = 101;
koalaScore1 = 109, koalaScore2 = 95, koalaScore3 = 123;

dolphinAverage = calculateAverage(dolphinScore1, dolphinScore2, dolphinScore3);
koalaAverage = calculateAverage(koalaScore1, koalaScore2, koalaScore3);

console.log(`\nĐiểm trung bình của đội Dolphins (Bonus 1): ${dolphinAverage}`);
console.log(`Điểm trung bình của đội Koalas (Bonus 1): ${koalaAverage}`);

determineWinner(dolphinAverage, koalaAverage);

// Dữ liệu Bonus 2
dolphinScore1 = 97, dolphinScore2 = 112, dolphinScore3 = 101;
koalaScore1 = 109, koalaScore2 = 95, koalaScore3 = 106;

dolphinAverage = calculateAverage(dolphinScore1, dolphinScore2, dolphinScore3);
koalaAverage = calculateAverage(koalaScore1, koalaScore2, koalaScore3);

console.log(`\nĐiểm trung bình của đội Dolphins (Bonus 2): ${dolphinAverage}`);
console.log(`Điểm trung bình của đội Koalas (Bonus 2): ${koalaAverage}`);

determineWinner(dolphinAverage, koalaAverage);
