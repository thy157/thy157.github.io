
let arr1 = [];
let arr2 = [];
let antalSlag = 6
let sum = 0

for (let index = 0; index < 100; index++) {
    sum = 0
    for (let i = 0; i < antalSlag; i++) {
        let value = Math.floor(Math.random() * 6) + 1
        //console.log(value);
        arr1.push(value);
    }

    for (let i = 0; i < antalSlag; i++) {
        let x = arr1.pop();
        sum += x
    }
    console.log('summen er ', sum);

    arr2.push(sum);
}
