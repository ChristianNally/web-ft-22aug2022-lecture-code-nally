class Rectangle {

  constructor(length, width){
    this.length = length;
    this.width = width;
  }

  area() {
    return ( this.length * this.width);
  }

};

const rec = new Rectangle(2,3);

console.log('rec', rec);
console.log('area', rec.area());

const newAreaReference = rec.area;

console.log('mnkey', newAreaReference());

// class Solid extends Rectangle {

//   constructor(length, width, height){
//     // super(length, width);
//     this.height = height;
//     console.log(`${this.length}, ${this.width}, ${this.height}`);
//   }

// }

// const solid = new Solid(3, 4, 5);
// console.log('Solid', solid);
