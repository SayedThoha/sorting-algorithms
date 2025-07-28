let arr = [11, -2, 3, 4, 5, -11, 4, 1, 0];

function quickSort(arr) {
  
  let len = arr.length;

  if (len < 2) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arr));

/* 

time complexity :
best :o(nlogn)
avg:o(nlogn)
worst:o(n^2)

space complexity: o(log n)

*/
