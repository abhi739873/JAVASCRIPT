// let myName = "abhishek    "
// let mySecondName = "rishu    "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhishek = function(){
    console.log(`abhishek is present in all objects`);
}

Array.prototype.heyAbhishek = function(){
    console.log(`abhishek says hello`);
}

// heroPower.abhishek()
// myHeros.abhishek()
// myHeros.heyAbhishek()
// heroPower.heyAbhishek()

// inheritance

const User = {
    name: "abhi",
    email: "abhi@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "abhi    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"abhishek".trueLength()
"iceTea".trueLength()