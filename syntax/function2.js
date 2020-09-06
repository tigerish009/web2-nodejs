console.log(Math.round(1.6));
console.log(Math.round(1.4));

function sum(first, second) { //parameter 매개변수
    console.log('a');
    return first + second;
    console.log('b'); // return에서 종료돼서 실행안됨.
}

console.log(sum(2,4)); // argument 아규먼트