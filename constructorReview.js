//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
var Animal = function(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = food;
};

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here

var person = function(name, age, height, gender) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.height = height;
    obj.gender = gender;
    return obj;
};

//Create a animal array and a person array.

  //code here
var animals = [];
var persons = [];

//Create two instances of Animal and push those into your animal array

  //code here
var cat = new Animal('Ass', 'Tard', '4', 'gray', ['hopes', 'dreams']);
var dog = new Animal('Dog', 'This is Dog', '4', 'yellow', ['dog', 'cat', 'poop', 'homework']);

animals.push(cat, dog);
//Create two instances of person and push those into your person array.

  //code here
var Jake = person('Jake', 28, '5\'8"', 'Male');
var Kim = person('Kim', 25, '5\'8"', 'Female');

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here

Animal.prototype.eat = function() {
    var rnd = Math.floor(Math.random() * this.food.length);
    alert(this.name + ' ate ' + this.food[rnd]);
};
//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

//No because person does not have a reference to its prototype

/*
  1) What happens when you use the 'new' keyword to call a Constructor function? 
        JS creates a refrence to prototype using var this = Object.Create(this.prototype)
  2) What's a good way to describe the keyword 'this'
        this is a reference to whatever is calling it. 
  3) Can a normal function which creates an object and then returns that object use the prototype?
        If you hack it appropriately then sure otherwise no
  4) What happens if you forget to use 'new' when calling a constructor?
        JS will assign the this variable to Window which is bad :( so dont forget or write your constructors using the agnostic Constructor
*/