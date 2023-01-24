class book {
    constructor(title,author) {
        this.title = title;
        this.author = author;
    }
    getSummary() {
        return `${this.title} was written by ${this.author} 
         in ${this.year}`;
    }
}
class magazine extends book {
    constructor(title,author,year) {
        super(title,author);
        this.year = year;
    }
}

// const b1 = new book('one','John');
// console.log(b1);

const m1 = new magazine('Two','Devid','2013');
console.log(m1.getSummary());