class Object {
    toString(){
        console.log("inside object class");
    }
}

class MyString extends Object {
    split(){
        console.log("inside split method");
    }
}

class CustomObject extends MyString{

}


var obj= new CustomObject()
obj.split()
obj.toString()