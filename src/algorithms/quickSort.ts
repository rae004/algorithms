export function quickSort(
  arr: number[],
  orderOperator: (a: number, b: number) => boolean,
) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (orderOperator(arr[i], pivot)) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [
    ...quickSort(left, orderOperator),
    pivot,
    ...quickSort(right, orderOperator),
  ];
}
