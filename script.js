const array = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
let count = 0;

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

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

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let indexMin = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[indexMin]) {
//         indexMin = j;
//       }

//       count += 1;
//     }

//     let swap = arr[i];
//     arr[i] = arr[indexMin];
//     arr[indexMin] = swap;
//   }

//   return arr;
// }

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j + 1] < arr[j]) {
//         let swap = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = swap;
//       }
//       count += 1;
//     }
//   }

//   return arr;
// }

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let pivotIndex = Math.floor(arr.length / 2);
//   let pivot = arr[pivotIndex];
//   let less = [];
//   let greater = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i === pivotIndex) {
//       continue;
//     }

//     if (arr[i] < pivot) {
//       less.push(arr[i]);
//     } else {
//       greater.push(arr[i]);
//     }

//     count += 1;
//   }

//   return [...quickSort(less), pivot, ...quickSort(greater)];
// }

function breadthSearch(graph, start, end) {
  let queue = [];
  queue.push(start);

  while (queue.length > 0) {
    const current = queue.shift();

    if (!graph[current]) {
      graph[current] = [];
    }

    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
}

console.log(breadthSearch(graph, 'a', 'n'));
console.log(array.length);

console.log('count:', count);
