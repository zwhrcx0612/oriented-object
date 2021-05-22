// 原型链实现继承的基本模式
function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function () {
    return this.property;
};
function SubType() {
    this.subproperty = false;
}
//继承了 SuperType 
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
    return this.subproperty;
};
var instance = new SubType();
alert(instance.getSuperValue()); //true

// 原型链模式存在的问题  所有的instance都会共享colors
function SuperType() {
    this.colors = ["red", "blue", "green"];
}
function SubType() {
}
//继承了 SuperType 
SubType.prototype = new SuperType();
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black" 
var instance2 = new SubType();
alert(instance2.colors); //"red,blue,green,black"