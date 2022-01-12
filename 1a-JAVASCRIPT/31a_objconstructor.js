class Student{
    constructor(roll,coursename,total){
        this.roll=roll
        this.coursename=coursename;
        this.total=total
    }

    getStudent(){
        console.log(this.roll,this.coursename,this.total);
    }
}

var obj= new Student(101,"arun",1000)
obj.getStudent();