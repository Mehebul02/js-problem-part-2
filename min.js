// const price = [2390,2100,40000,54000,1000000]
// function getMin(numbers){
//     let min =numbers[0];
//     for (const num of numbers){
//         if (num<min){
//             min =num
//         }
//     }
//     return min
    
// }
// const cheap =getMin(price);
// console.log("Cheped one is:",cheap)
/*---------Max Price---------*/
const price = [33000,22000,57000,60000,205000]
function getMax(numbers){
    let max =numbers[0];
for (const number of numbers){
    if (number > max){
        max = number
    }
}
return max
}
const chep =getMax(price);
console.log("Max number of this price ", chep);