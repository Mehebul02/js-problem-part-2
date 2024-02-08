const phones =[
    {model:1,name:"Xiomi",price:23000,camera:"64MP",color:"Black"},
    {model:2,name:"Huawei",price:14000,camera:"48MP",color:"Red"},
    {model:3,name:"Samsung",price:25000,camera:"32MP",color:"Blue"},
    {model:4,name:"Walton",price:12000,camera:"12MP",color:"White"},
]
function getCheapestPhone(phones){
    let max =phones[0]
    for (const phone of phones){
        if(phone.price > max.price){
            max =phone
            
        }
       

    }
    return max

}
const result =getCheapestPhone(phones);
console.log(result)