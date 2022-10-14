const sumContiguoseArray = (arr) => {
  const lastDigit = arr[arr.length - 1];
  return (lastDigit * (lastDigit + 1)) / 2;
};

console.log(sumContiguoseArray([1, 2, 3]));
