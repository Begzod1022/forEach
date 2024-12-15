// 1 
let arr = [
    [115, 50, 25],
    [75, 12, 99],
    [34, 36, 55],
]

const arr2 = arr.map((item) => {
    item = item[0] + item[0]
    item = item[1] + item[1]
    item = item[2] + item[2]
})

console.log(arr2);

//2
let prices = [15000, 3200, 10200, 455000, 123000, 7000]
let max = [-Infinity];
let min = [Infinity];

prices.forEach(item => {
    if (item < min)
        min = item
    
    if (item > max)
        max = item
})

console.log(min);
console.log(max);

// 3 
let nums = [12, 3, 57, 34, 90, 1, 10, 9]
let odd = []
let even = []

nums.map((item) => {
    if (item % 2 === 0) {
        even.push(item)
    } else {
        odd.push(item)
    }
})

console.log(even);
console.log(odd);   