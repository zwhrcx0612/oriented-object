// 原型模式
// 缺点：共享了所有的属性，但实际上不希望这么做，所以组合构造函数模式和原型模式
function Person() {
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
    console.log(this.name);
};
var person1 = new Person();
person1.sayName(); //"Nicholas" 
var person2 = new Person();
person2.sayName(); //"Nicholas" 
console.log(person1.sayName == person2.sayName); //true
// 更简单的原型语法，避免了每次都要Person.prototype
function Person() {
}
Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function () {
        alert(this.name);
    }
};