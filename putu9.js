// Number 9
let array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function oddHalf(arr) {
  let newArr = [];
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    console.log(arr[i]);
    if (arr[i] % 2 !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(oddHalf(array9));
