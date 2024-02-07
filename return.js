function fewTime(number){
    const result =number +number;
    return result;
}
fewTime();
const output =fewTime(55);
console.log(output);
// even 
function even(num1,num2){
    const result = num1-num2;
    return result;
}
const output1 =even(30,78);
//  even-2
function even2(num1,num2){
    return num1-num2;
}
const result2=even2(55,89);
console.log("Even Number1",output1, "even number",result2);

// multiple
function multiple(num1,num2){
    const add=num1+num2;
    const even =num1-num2;
    const multiply=add*even;
    const result =multiply /4;
    return result;
}
const result=multiple(10, 5);
console.log(result);