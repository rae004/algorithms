function merge(
  left: number[],
  right: number[],
  orderOperator: (a: number, b: number) => boolean,
) {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (orderOperator(left[indexLeft], right[indexRight])) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
    // console.log('Result', result);
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}
export function mergeSort(
  arr: number[],
  orderOperator: (a: number, b: number) => boolean,
  count: number,
) {
  count++;
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  // console.log('Left', left, count);
  // console.log('Right', right, count);
  return merge(
    mergeSort(left, orderOperator, count),
    mergeSort(right, orderOperator, count),
    orderOperator,
  );
}
