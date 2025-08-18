// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(Number1, Number2, Number3) {
    if (Number1 > Number2 && Number1 > Number3 || Number1 === Number2 && Number1 === Number3 ||
         Number1 === Number2 && Number1 > Number3 ) {
       return console.log(Number1)
    } else if (Number2 > Number1 && Number2 > Number3 || Number2 === Number3 && Number2 > Number1) {
        return console.log(Number2)
    } else if (Number3 > Number1 && Number3 > Number2 || Number3 === Number1 && Number3 > Number2) {
        return console.log(Number3)
    } 
}

findLargest(10, 10, 45)