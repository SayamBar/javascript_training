// ===destructuring(rest operator)===
// var nums = [1,2,3,4,5];
// [a,b,c,...d] = nums;
// console.log(a);
// console.log(b);
// console.log(d);

// ===spread operator===
// var e = [...nums];
// var f = {...nums};
// console.log(e);
// console.log(f);

// ===Nullish coalescing assignment (??=)===
// const a = {duration: 50};
// a.duration ??= 25;
// console.log(a.duration);

// a.speed ??= 100;
// console.log(a.speed);

// ===Optional chaining===
// const a = {
//     name : 'sayam'
// }; 

// console.log(a.address?.()); //optional chaining
// console.log(a.address());

// ===call,apply and bind method==
let name = {
    firstName : 'Sayam',
    lastName : 'Bar'
};

let printFullName = function(hometown) {
    console.log(this.firstName + " " + this.lastName + " " + "from " + hometown);
}

printFullName.call(name, "Howrah");

let name2 = {
    firstName : 'Bar',
    lastName : 'Sayam'
};

printFullName.call(name2, "Kolkata");

printFullName.apply(name2, ["Kolkata"]);    // it takes second argument as a array list


let printMyName = printFullName.bind(name2, "Kolkata"); // bind method return the method which can be call later
console.log(printMyName);   // print the function
printMyName();  // call the function