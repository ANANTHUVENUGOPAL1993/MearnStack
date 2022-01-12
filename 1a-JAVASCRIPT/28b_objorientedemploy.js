class Employee{
    setEmployee(eid,ename,desig,salary){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig
        this.salary=salary
    }

    getEmployee(){
        console.log(this.eid,this.ename,this.desig);
    }
}