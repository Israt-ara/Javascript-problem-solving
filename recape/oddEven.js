// without return


function findOddEven(number) {

    if (number % 2 == 0) {
        console.log("The number is even");
    }
    else {
        console.log("This number is odd");
    }

}
var oddEvenResult = findOddEven(17);



// with return 

function findOddEven1(number) {

    if (number % 2 == 0) {
        return ("The number is even");
    }
    else {
        return ("This number is odd");
    }

}
var oddEvenResult1 = findOddEven1(39);
console.log(oddEvenResult1);

