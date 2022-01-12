//////polymorphism



////////method over rolling ---same method name ,differnet number of parameter


////////method overriding------



///////method over rolling

class MyMaths{

add(...args){
console.log(args);
console.log("inside three arg");
}

}


var obj=new MyMaths()
obj.add(10,20,30)
obj.add(10,20)
obj.add()

//////method over riding

class Parent{
    bike(){
        console.log("passion pro");
    }
}

class Child extends Parent{

}


var obj =new Child()