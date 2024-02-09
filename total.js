const products =[
    { name : "shirt", price:600,},
    { name : "pant", price:1200,},
    { name : "shoe", price:3200,},
    { name : "cap", price:230,},
    { name : "laptop Stand", price:430,},
]
function getProducts(products){
    let total =0;
    for (const product of products){
       total =total +product.price
    }
    return total
}
const total =getProducts(products);
console.log("Total price this products=",total);