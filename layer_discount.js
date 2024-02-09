
/**
 * first100--->:100
 * 100to200--->:90
 * above200 --->:70
 */
function layerDiscountTotal(quantity){
    const first100Price =100;
    const second100Price = 90;
    const above200Price = 70;
    if( quantity <=100){
        total =quantity * first100Price;
        return total
    }
    else if (quantity <=200){
        const first100PriceTotal =100 * first100Price;
        const remainingQuantity = quantity -100;
        const totalPrice =remainingQuantity * second100Price
        const total = totalPrice +first100PriceTotal
        return total;
    }
    else{
        const first100PriceTotal =100 *first100Price;
        const second100PriceTotal =100 * second100Price;
        const remainingQuantity = 200 -quantity;
        const remainingTotal =remainingQuantity * above200Price;
        const total = first100PriceTotal + second100Price +remainingTotal;
        return total
    }
}

const totalPrice =layerDiscountTotal(210);
console.log("Total Price discount =",totalPrice);




