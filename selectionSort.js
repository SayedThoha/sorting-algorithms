let arr = [11, -2, 3, 4, 5 - 11, 4, 1, 0];

function selectionSort(arr) {
  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
  return arr;
}

console.log(selectionSort(arr));


/* 
time complexity 
best:o(n^2)
average:o(n^2)
worst: o(n^2)
space complexity ; o(n)
*/