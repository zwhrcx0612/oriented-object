// 构造函数模式创建对象 
// 缺点：无法复用方法，每次创建对象都会新开辟一块地址，存放sayName，属实没有必要，可以使用原型模式来解决
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        alert(this.name);
    };
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");