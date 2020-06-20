const num = [1, 2, 3, 4, 5, 7];
// const part = num.slice(2, 5);

const removed = num.splice(2, 5, 77)
// console.log(removed);
// console.log(num);

const together = num.join(",")
console.log(together);