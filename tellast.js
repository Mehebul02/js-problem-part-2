
// let height=[88,66,44,22,33,44,44,55,55,22,5]
// function getMax(numbers){
//     console.log(numbers)
// }
// const max=getMax(height)
// console.log("max Number=" + max);

let height=[88,66,44,22,33,44,44,55,55,22,5]
function getMax(numbers){
    let max =[1];
    for (const num of numbers){
        if(num < max){
            num=max ;

        }
    }
    return num
}

const max= getMax(height);
console.log("max number ="+ max);