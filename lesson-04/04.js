/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, 
где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
   const array1 = [...str]  
   let array2 = ''
for (let i = array1.length - 1; i >= 0; i--) {
        array1.splice(i, 0, array1[i]); 
} for (let i = 0; i < array1.length; i++) {
    array2 += array1[i];
    if (i < array1.length - 1) {
        array2 += ''
    }
}
return array2
}

