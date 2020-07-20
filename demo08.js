// 稳妥构造函数模式
// 一是新创建对象的实例方法不引用 this；二是不使用 new 操作符调用构造函数
function Person(name, age, job) {

    //创建要返回的对象
    var o = new Object();
    //可以在这里定义私有变量和函数
    //添加方法
    o.sayName = function () {
        alert(name);
    };

    //返回对象
    return o;
}