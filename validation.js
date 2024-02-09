function multiply(num1,num2){
    if (typeof num1 !== "number" || typeof num2 !=="number" ){
        return "The proveder number please"
    }
    const multi =num1 * num2;
    return multi
 
}
// const result =multiply(33,"55")
// console.log( result)

function fullName(first,second){
    if (typeof first !== "string" || typeof second !== "string"){
        return "Please provide a string"
    }
    const full =first +" "+ second
    return full;
}
const full =fullName("mehebul",77)
// console.log(full);

function getPrice(product){
    if (typeof product !=="object"){
        return "Please provide a object "
    }
    const price= product.price;
    return price; 
}
const price = getPrice({name:"Chulkanir dandi", price:444,color:"Black"})
// const price = getPrice(44)
// console.log(price);
function secondPrice(numbers){
    if (Array.isArray(numbers) === false){
        return "please provide on array"
    }
const second =numbers[2]
return second
}
const second =secondPrice([44,66,777,566,55])
console.log(second)