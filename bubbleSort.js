let arr = [11, -2, 3, 4, 5 - 11, 4, 1, 0];

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [[arr[j]], arr[j + 1]] = [[arr[j + 1]], arr[j]];
      }
    }
  }

  return arr;
}


console.log(bubbleSort(arr))