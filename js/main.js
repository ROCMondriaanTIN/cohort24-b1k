console.log('main loaded');

let maxPoints = 60;
let total = 0;

for (let i = 0; i < 3; i++){
    let grade = calculateGrade(prompt('vul het aantal punten in.'), maxPoints);
    console.log(grade);
    total += grade;
}

console.log(total / 3);

function calculateGrade(points, maxPoints) {
    let total = (points / maxPoints) * 9 + 1;
    return total;
}