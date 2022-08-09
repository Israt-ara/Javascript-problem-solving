// [1,2,3,4,5,6,7]
function oddEvenSum(arr) {
    let evenSum = 0;
    let oddSum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenSum = evenSum + arr[i]
            // console.log(arr[i]);
        }
        else {
            oddSum = oddSum + arr[i];
        }
    }
    // console.log("Even sum:", evenSum, "odd sum:", oddSum);

    return { evenSum, oddSum }; // writing system of multiple value return
}

const arr = [3, 5, 8, 4, 25, 12]
console.log(oddEvenSum(arr));
// console.log(oddEvenSum(arr).evenSum);      if i only want to see even sum them i use . and write the variable name.
