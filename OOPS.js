// const book1 = {
//     name: "jhscej",
//     author: "jhvbes",
//     getAll: function() {
//         console.log(this.name);
//         console.log(this.author);
//     }
// };
// book1.getAll();


// Constructor
function book(title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getSummary = function() {
    //     return `${this.title} was written by ${this.author}
    //     in ${this.year}`;
    // }
}

//Prototype
book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} 
         in ${this.year}`;
};

// book.prototype.getAge = function() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
// }

// const b1 = new book('One','John','2011');
// const b2 = new book('Two','Devid','2013');
// console.log(b1.getSummary());

// console.log(b1.getAge());

// Inheritance
function magazine(title,author,year,month) {
    book.call(this,title,author,year);
    this.month = month;
}

// Inherit prototype 
magazine.prototype = Object.create(book.prototype);

const m1 = new magazine('Mag1','Devis','2017','january');

console.log(m1.getSummary());