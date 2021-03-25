// const arr = [1, 0, 3, 5, 10];

// function searchElement(arr, el) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === el) {
//       return i;
//     }
//   }
//   return -1;
// }

const arr = [1, 4, 5, 10, 34, 9, 0, 24, 4, 10, 4];
arr.sort((a, b) => a - b);
console.log(arr);

console.log(countFreg(arr, 1));

function binarySearch(arr, el) {
  let left = -1;
  let right = arr.length;

  while (right - left > 1) {
    const mid = Math.floor((right - left) / 2); // middle of array

    if (arr[mid] === el) {
      // if we got it, return index
      return mid;
    }

    if (arr[mid] > el) {
      right = mid;
    } else {
      left = mid;
    }

    return -1;
  }
}

function countFreg(arr, el) {
  const posEL = binarySearch(arr, el);

  if (posEL === -1) {
    return 0;
  }

  let i = posEL;
  while (arr[i] === el) {
    i--;
  }

  let j = posEL;
  while (arr[j] === el) {
    j++;
  }

  return j - i - 1;
}
