let arr = [11, -2, 3, 4, 5, -11, 4, 1, 0];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];

    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort(arr));

/*

time complexity:
best:o(n)
avg:o(n^2)
worst:o(n^2)

space complexity : o(1)
 */
