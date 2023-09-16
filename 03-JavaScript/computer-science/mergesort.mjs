function mergeSort(lst) {
  let mid = Math.floor(lst.length / 2);
  let left = lst.slice(0, mid);
  let right = lst.slice(mid);
  if (left.length > 1) {
    mergeSort(left);
  }
  if (right.length > 1) {
    mergeSort(right);
  }
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      lst[k] = left[i];
      k += 1;
      i += 1;
    } else {
      lst[k] = right[j];
      k += 1;
      j += 1;
    }
  }
  while (j < right.length) {
    lst[k] = right[j];
    k += 1;
    j += 1;
  }
  while (i < left.length) {
    lst[k] = left[i];
    k += 1;
    i += 1;
  }
}
export default mergeSort;
