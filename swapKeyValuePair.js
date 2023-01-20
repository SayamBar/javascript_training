let obj = {
    a: 'one',
    b: 'two',
    c: 'one'
};
console.log(obj);
// let keys = Object.keys(obj);
// console.log(keys);

// let value = Object.values(obj);
// console.log(value);

// let entry = Object.entries(obj);
// console.log(entry);

// console.log(Object.keys(obj).includes('g'));

let res = {};
let keys = Object.keys(obj);
for (var i of keys) {
    let t = obj[i];
    if(Object.keys(res).includes(t)) {
        let arr = [];
        if(res[t].length > 1) {
            res[t].push(i);
        } else {
            let t1 = res[t];
            arr.push(t1);
            arr.push(i)
            res[t] = arr;
        }
    }
    else {
        res[t] = i;
    }
}
console.log(res);
