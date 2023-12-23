//Function declaration
//function name(...param){}
//sum(3,6);

/* function sum(a,b, callback){
   // console.log(a+b);
   const result=a+b;
   callback(result);
} */

/* function displayer(res){
    console.log('Result',res);
} */
//sum(5);
//sum(3,10,displayer);
/* sum(5,10,function(res){
    console.log('Result',res);
}); */

//return
/* function sum(a,b){
    return a+b;
} */

//const result=sum(2,3);
//console.log('result',result);
//console.log(sum(2,4));

//function expression
/* const sum=function(a,b){
    console.log(a+b);
} */

//sum(5,10);
//Arrow function expression
//const name=()=>{};

const sum=(a,b)=>{
    return a+b;
}
//const sum(a,b)=>a+b;  short record
//const result=sum(10,6);
//console.log('result',result);

//const addFive=(a,b)=>a+5;
const addFive=a=>a+5; //short record

const result=addFive(12);
console.log('res',result);

function multiply(a,b,callback){
    const result=a*b;
    callback(result);
}

multiply(5,2,(multiplyResult)=>{
    console.log('multiplyResult', multiplyResult);
});
