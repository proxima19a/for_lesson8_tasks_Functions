function getDivisorsCount(number){
    if (typeof number!=='number') {
        return NaN;
    }

     if (number<0 || !Number.isInteger(number)) {
        alert('number должен быть целым числом и больше нуля!');
        return;
    }

    let divisors=0;
    for (let i=number;i>0;i--){
        if (number%i===0){
            divisors++;
        }
    }
    return divisors;
}

console.log(getDivisorsCount(4));
console.log(getDivisorsCount(5));
console.log(getDivisorsCount(12));
console.log(getDivisorsCount(30));
console.log(getDivisorsCount(-30));
console.log(getDivisorsCount());
console.log(getDivisorsCount('qwerty'));
