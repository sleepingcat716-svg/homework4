/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 100 // тестовое значение, можно изменять
let grade
const maxPointsA = 100;
const minPointsA = 90;
const maxPointsB = 89;
const minPointsB = 80;  
const maxPointsC = 79;
const minPointsC = 70;
const maxPointsD = 69;
const minPointsD = 50
const theAssignmentWasFailed = 49
if (score >= minPointsA && score <= maxPointsA){
    grade = "A";
    console.log(grade);
} else if (score >= minPointsB && score <= maxPointsB) {
    grade = 'B';
    console.log(grade);
}
    else if (score >= minPointsC && score <= maxPointsC) {
        grade = 'C';
        console.log(grade);
    } else if (score >= minPointsD && score <= maxPointsD ) {
        grade = 'D';
        console.log(grade)
    } else  if(score <= theAssignmentWasFailed ) {
        grade = 'F'
        console.log(grade)
    } 

// your code
