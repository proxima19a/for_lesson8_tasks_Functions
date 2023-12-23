 /* const getSumOfNumbers=(number, type='odd')=>{
    if (typeof number !=='number'){
        return NaN;
    }

    let sum=0;
    for(let i=0;i<=number;i++){
        let isEven=i%2===0;
        let isOdd=!isEven;

        if (type===''){
            sum+=i;
        }else if (isEven && type==='even'){
            sum+=i;
        }else if(isOdd && type==='odd'){
            sum+=i;
        }
    }

    return sum;
} 
*/

function getSumOfNumbers (number, type='odd') {
    if (typeof number !=='number'){
        return NaN;
    } 

    let sum=0;

    let i=0;
    while(i<number) {
        let isEven=i%2===0;
        let isOdd=!isEven;

        switch(type){
            case '':
                sum+=i;
                break;
            case 'isEven && type==="even"':
                sum+=i;
                break;
            case 'isOdd && type==="odd"':
                sum+=i;
                break;
        }
        i++;
    }
    return sum;
}

console.log(getSumOfNumbers(10,'odd'));
console.log(getSumOfNumbers(10,'even'));
console.log(getSumOfNumbers(10,''));
