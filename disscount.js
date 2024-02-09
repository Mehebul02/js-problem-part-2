/* upto 100: =100;
* Then more 101-200: =130;
* more then  200: =130;
*/
function discountPrice(quantity){
    if(quantity <=100){
        const total =quantity *100;
        return total;
    }
    else if (quantity <=200){
        const total =quantity * 130;
        return total
    }
    else{
        const total =quantity *50;
        return total
    }

}
const total =discountPrice(101);
console.log("Total Discount Price =",total)