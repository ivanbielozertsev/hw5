const user = {}
user.name = "John";
user.surname = "Smith";
console.log( user.name, user.surname)
user.name = "Pete";
console.log( user.name, user.surname)
delete user.name
console.log( user.name, user.surname)