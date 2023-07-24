const numArr = [1, 2, 3, 4, 5];

const result = numArr.reduce((acc, e1) => {
    return acc + e1;
}, 0);

console.log(result);
