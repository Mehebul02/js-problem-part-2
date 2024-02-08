function priceShopping(shirtQuantity,pantQuantity,shoeQuantity){
    const shirtPrice =608;
    const pantPrice =2500;
    const shoePrice =3020;
    const totalShirt =shirtPrice * shirtQuantity;
    const totalPant= pantPrice * pantQuantity;
    const totalShoe= shoePrice * shirtQuantity;
    totalPrice =totalShirt + totalShirt + totalShoe;
    return totalPrice;
}
const shopping =priceShopping(2,1,1);
console.log(shopping);

// function studyTour(bus,breckfirst,dupureKhabar,ratreKhabar){
//     const busVara =50000;
    
// }