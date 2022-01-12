class Parent {
    phone(){
        console.log("have nokia 6611");
    }
}

class Child extends Parent{

}

var obj= new Child();
obj.phone()

//////// checking the inheritenc 

console.log(obj.__proto__);

console.log(obj.__proto__.__proto__);