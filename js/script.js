let user = {     // an object
    name: "John",  // by key "name" store value "John"
    surname: "Smith",
    age: 30 ,       // by key "age" store value 30
    "likes birds": true  // multiword property name must be quoted
  };


user.name = "Ahmed";

alert(user.name);

delete user.surname;

console.log(user.name);
console.log(user.surname);
console.log(user.age);
console.log(user["likes birds"]);