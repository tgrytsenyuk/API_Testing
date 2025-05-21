//task 1:
console.log('Task 1')

const array = [4, 4, 8, 3, 3, 3, 2, 4, 4]

//Вивести кожен елемент масиву
array.forEach(item => {
    console.log(item)
})
console.log('-------')

//Вивести перші 3 елементи масиву
for (let i = 0; i <= array.length - 1; i++) {
    if (i <= 2) {
        console.log(array[i])
    }
}
console.log('-------')

//Вивести суму всіх елементів
let sumOfArray = 0
for (let i = 0; i <= array.length - 1; i++) {
    sumOfArray += array[i]
}
console.log(sumOfArray)
console.log('-------')

//Вивести суму всіх елементів окрім елемента що = 4
let sumOfArrayWithoutFour = 0
for (let item of array) {
    if (item === 4) {
        item++
    } else {
        sumOfArrayWithoutFour += array[item]
    }
}
console.log(sumOfArrayWithoutFour)

//task 2:
console.log('Task 2')

import { readFileSync } from 'fs';

var body = readFileSync('testData/listsResponse.json', 'utf8')
const data = JSON.parse(body)

const arrayOfLists = data.lists
arrayOfLists.forEach(list => {
    console.log(`${list.id} - ${list.name}`)
})