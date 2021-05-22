//最原始的创建对象的方式，最开始使用Object构造函数的方式，后来使用字面量的形式
// 缺点：使用同一个接口创建很多对象，会产生大量的重复代码。为解决这个问题，人们开始使用工厂模式的一种变体。
var person = new Object(); 
person.name = "Nicholas"; 
person.age = 29; 
person.job = "Software Engineer"; 
person.sayName = function(){ 
    console.log(this.name); 
};
// or 字面量的方式
var person = { 
    name: "Nicholas", 
    age: 29, 
    job: "Software Engineer", 
    sayName: function(){ 
        alert(this.name); 
    } 
};