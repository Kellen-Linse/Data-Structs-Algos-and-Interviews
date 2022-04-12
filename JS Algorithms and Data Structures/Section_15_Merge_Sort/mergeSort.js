function mergeArrays(arr1, arr2) {
  let resultsArr = [];
  let i = 0;
  let j = 0;

  while (arr1[i] && arr2[j]) {
    if (arr1[i] < arr2[j]) {
      resultsArr.push(arr1[i]);
      i++;
    } else {
      resultsArr.push(arr2[j]);
      j++;
    }
  }

  while (arr1[i]) {
    resultsArr.push(arr1[i]);
    i++;
  }

  while (arr2[j]) {
    resultsArr.push(arr2[j]);
    j++;
  }

  return resultsArr;
}

let a = [2, 3, 7];
let b = [1, 4, 9];

// let newArr = mergeArrays(a, b);

let arr = [1, 10, 3, 5, 9, 2, 6]

function mergeSortLong(arr){

    const mid = Math.floor(arr.length / 2)
    const arrFirstHalf = arr.slice(0, mid);
    const arrSecondHalf = arr.slice(mid, arr.length);

    let a = [];
    let b = [];

    if(arrFirstHalf.length > 1) {
      a = mergeSort(arrFirstHalf);
    } else {
      a = arrFirstHalf;
    };

    if(arrSecondHalf.length > 1) {
      b = mergeSort(arrSecondHalf)
    } else {
      b = arrSecondHalf;
    };

    console.log(a, b)
    console.log("merge call")
  return mergeArrays(a, b);
}

function mergeSort(arr){
  //recursive function base case
  if(arr.length <= 1) return arr;

  let mid = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid, arr.length));

  return mergeArrays(left, right);
}

console.log(mergeSort(arr));
