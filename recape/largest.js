// without return

function largestValue(a, b, c) {

    if (a > b && a > c) {
        console.log("The largest value is a");
    }

    else if (b > a && b > c) {
        console.log("The largest value is b");
    }

    else {
        console.log("The largest value is c");
    }
}
var result = largestValue(7, 5, 8);


// with return


function largestValue1(a, b, c) {

    if (a > b && a > c) {
        return a;
    }

    else if (b > a && b > c) {
        return b;
    }

    else {
        return c;
    }
}
var result1 = largestValue1(15, 5, 12);
console.log(result1);