// 1. Составьте программу, которая присваивает переменной d
//  значение 7, а затем выводит на экран: в первой строке -
//   это значение, во второй – квадрат этого значения, в 
//   третьей – куб этого значения.
//  Программа должна выводить на экран новое значение.
// for (let d = 7; d < 350; d *= 7) {
// console.log(d);
// }

//   2 Составьте программу, которая принимает с клавиатуры два целых числа и,
// если первое больше второго, выводит на экран их сумму, если же наоборот
//  – выводит на экран их произведение. В случае же, если числа одинаковы,
//   программа выводит на экран сообщение "числа одинаковые".
// let num1 = Number(prompt('enter the number'));
// let num2 = Number(prompt('enter the number'));
// if (num1 > num2) {
// console.log(num1 + num2);
// }
// if (num1 < num2) {
// console.log(num1 * num2);
// }
// else if (num1 == num2) {
// console.log('Числа одинаковые');
// }
// 
//   3   Составьте программу, которая принимает с клавиатуры целое число
//  и, если оно положительное, выводит его куб.
// let num3 = Number(prompt('enter the number'));
// console.log(num3);
// if (num3 > 0) {
// console.log(num3 ** 3);
// }

//    4   Составьте программу, которая принимает с клавиатуры два числа:
//  первое – количество учеников в классе, второе – количество 
//  стульев в кабинете.  Программа проверит соответствие между
//   этими двумя значениями и выведет на экран соответствующую
//    информацию.    ввод: 24, 28 ⇒ вывод: стульев хватает;
// ввод: 24, 22 ⇒ вывод: стульев не хватает

// let num4 = Number(prompt('enter the number'));
// let num5 = Number(prompt('enter the number'));
// if (num4 > num5) {
// console.log('Стульев хватает');
// }
// else if (num4 < num5) {
// console.log('Стульев не хватает');
// }
// 
//   5   Составьте программу, которая выводит на экран все однозначные
//  положительные числа в возрастающем порядке. 
// for (let i = 1; i < 10; i++) {
//  console.log(i)
// }
// 
//   6  Написать цикл, который выводит те числа из массива, которые больше или равны 15.

let numbers = [12, 7, 9, 19, -8, 26, 41, -4]
// for(let i=0; i<numbers.length; i++){
// if(numbers[i]>=15){
// console.log(numbers[i])
// }
// }
//   7   Написать цикл, который выводит только нечетные числа массива 
// for(let i=0; i<numbers.length; i++){
// if(numbers[i]%2!=0){
// console.log(numbers[i])
// }
// }
//   8   Вывести только те значения массива, индекс которых кратен трем.

for (let i = 1; i < numbers.length; i++) {
    if (i % 3 == 0)
        console.log(numbers[i])
}

//   9   Найти сумму нечетных чисел и вывести в консоль. 
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        sum += numbers[i]

    }

} console.log(sum)

// Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. 
// Вычесть из большего меньшее.
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 != 0) {
        sum1 += numbers[i]
}
if (numbers[i] % 2 == 0) {
    sum2 += numbers[i]
}
}
console.log(sum1);
console.log(sum2);
console.log(sum1-sum2);