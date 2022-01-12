class Student{
    setStudent(roll,course,total){
        this.roll=roll
        this.course=course;
        this.total=total
    }

    getStudent(){
        console.log(this.roll,this.course,this.total);
    }
}

var obj= new Student()
obj.setStudent(100,"arun",300)
obj.getStudent();


var obj1=new Student()
obj1.setStudent(100,"arun",300)

console.log(obj1.rol);