// Замыкания

const createMultiplayer=function(n){
    return function(){
        return n*10;
    }
}

/* const multiply=createMultiplayer(5);
const result=multiply();
console.log(result); */

/* const createCounter=(initValue=0)=>{
    return(valueToAdd)=>{
        return initValue+valueToAdd;
    };
};

const addFive=createCounter(5);
const addTen=createCounter(10);
const result=addFive(10);
console.log(result);
console.log('addTen(50)',addTen(50)); */

const createCounter=(initValue=0)=>{
    let counter=initValue;

    return(valueToAdd)=>{
        counter+=valueToAdd;
        return counter;
    };
};

const addTwo=createCounter(2);

let result=addTwo(10); // 12
result=addTwo(5); // 17
result=addTwo(3); //20

console.log(result);
