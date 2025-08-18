// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(Number1, Number2, Number3) {
    if (Number1 > Number2 && Number1 > Number3 || Number1 === Number2 && Number1 === Number3 ||
         Number1 === Number2 && Number1 > Number3 ) {
        console.log(Number1)
    } else if (Number2 > Number1 && Number2 > Number3 || Number2 === Number3 && Number2 > Number1) {
        console.log(Number2)
    } else if (Number3 > Number1 && Number3 > Number2 || Number3 === Number1 && Number3 > Number2) {
        console.log(Number3)
    } 
}