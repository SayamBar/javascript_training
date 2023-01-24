class shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        console.log(this.color);
    }
}
class rectangle extends shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
}
const r1 = new rectangle('Red','100px','200px');
r1.getColor();