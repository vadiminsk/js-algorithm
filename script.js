const array = [0, 1, 3, 5, 6, 7, 12, 14, 15, 16];
let count = 0;

// function linearSearch(arr, item) {
//   for (let index = 0; index < arr.length; index++) {
//     count += 1;
//     if (arr[index] === item) {
//       return index;
//     }
//   }

//   return null;
// }

// function binarySearch(arr, item) {
//   let start = 0;
//   let end = arr.length;
//   let middle;
//   let found = false;
//   let position = -1;

//   while (found === false && start <= end) {
//     count += 1;
//     middle = Math.floor((start + end) / 2);

//     if (arr[middle] === item) {
//       found = true;
//       position = middle;
//       return position;
//     }

//     if (item < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }

//   return position;
// }

console.log('count:', count);
