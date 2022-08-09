let age = 18;
console.log(age);

age = 19;
console.log(age);


const x = 32;
console.log(x);

// x = 34;   cannot assign const value again
// console.log(x) 



if (true) {
    var p = 40;
}
if (true) {
    let q = 70;
    console.log(q);
}

console.log(p);
// console.log(q); if we write console.log her the output is q is undefineed. because let is block scope. Thets why we shoul
