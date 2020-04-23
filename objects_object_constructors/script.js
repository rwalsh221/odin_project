let log = console.log


function book (title, author, pages, haveRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.haveRead = haveRead,
    this.report = function() {
        let returnReport = (`${this.title} by ${this.author} has ${this.pages} pages and ${this.haveRead}`);
        return returnReport;
    }
}

const newBook1 = new book('The Bible', 'Jesus', '510', 'it has not been read');
console.log(newBook1.report());

const newTestObject = {
    firstName: 'John',
    lastName : 'Smith',
    age: '25',
    city: 'London'
};



// http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/


// **************************************************

// https://javascript.info/prototype-inheritance

// question 2

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__:table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
  console.log(pockets.pen);
  console.log(bed.glasses);
  console.log(table.money);
  console.log(pockets.glasses);


//   question 3

let animal = {
    eat() {
      this.full = true;
    }
  };
  
  let rabbit = {
    __proto__: animal
  };
  

  console.log(rabbit)
  rabbit.eat();
  console.log(rabbit)

  // question 4

//   We have two hamsters: speedy and lazy inheriting from the general hamster object.

// When we feed one of them, the other one is also full. Why? How can we fix it?

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// This one found the food
// speedy.eat("apple");
// log( speedy.stomach ); // apple

// // This one also has it, why? fix please.
// log( lazy.stomach ); // apple

function hamster(stomach) {
      this.stomach = [],
    
      this.eat = function(food) {
        this.stomach.push(food);
      }
    };
    
    let speedy = new hamster;
    speedy.eat('lettuce');
    log(speedy.stomach);
    let lazy = new hamster;
    log(lazy.stomach);