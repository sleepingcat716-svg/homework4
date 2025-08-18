// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(Number) {
  if (Number%2 === 1){
    console.log(false)
  } else if (Number%2 === 0) { 
    console.log(true)
  }
     
}



isEven(1)