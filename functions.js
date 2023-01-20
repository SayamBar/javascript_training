// map() creates a new array and not change the original array
const a = [1,2,3,4];
const na = a.map(function(num) {
    return num * 2;
})
console.log(na);    // [2,4,6,8]

// filter()
const fa = a.filter(function(num) {
    return num > 2;
})

console.log(fa);    // [3,4]

// find() => array.find(function(currentValue, index, arr),thisValue)
// The find() method returns the value of the first element that passes a test.
const fe = a.find(function(i) {
    if(i == 2)
        return true;
})

console.log(fe); // 2

// forEach()
a.forEach(function(i) { console.log(i); });

// includes() & length
console.log(a.includes(5)); //false

console.log(a.length); //4

// console.log(a.keys); //false

// push & pop
a.push(5);
console.log(a); // [1,2,3,4,5]

a.pop();
console.log(a); // [1,2,3,4]

// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.

console.log(a.shift()); //1 
console.log(a); //[2,3,4]

// slice(start,end)
console.log(a.slice(1,3));  //[3,4]
// The slice() method returns selected elements in an array, as a new array.
// The slice() method does not change the original array.

// The splice() method overwrites the original array.
console.log(a.splice(1,3));  //[3,4]
console.log(a); // [2]


