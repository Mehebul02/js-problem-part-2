const products =[
    { name : "shirt", price:600,quantity:5},
    { name : "pant", price:1200,quantity:3},
    { name : "shoe", price:3200,quantity:2},
    { name : "cap", price:230,quantity:4},
    { name : "laptop Stand", price:430,quantity:3},
]

function totalCat(products){
    let total =0;
    for (const product of products){
        const totalItem = product.price * product.quantity;
        total =total +totalItem;

    }
    return total;
}
const totalCost =totalCat(products);
console.log("Total Amount this products=",totalCost);