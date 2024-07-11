class User{
    constructor(fname,lname,role,email){
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.role = role;
    }
    displayInfo(){
        let tmpArray = [];
        for(let key in this){
            tmpArray.push(this[key]);
        }
        return tmpArray;
    }
}
class Course{
    constructor(cid,cname,credit){
        this.cid = cid;
        this.cname = cname;
        this.credit = credit;
    }
}
export class Student extends User{
    constructor(studentID,fname,lname,email){
        super(fname,lname,"student",email);
        this.studentID = studentID;
        this.courseList = new Map();
    }
    displayInfo(){
        let tmpArray = super.displayInfo();
        tmpArray.unshift(this.studentID);
        return tmpArray;
    }
    courseEnrollment(courseObj){
        const selectedCourse = new Course(courseObj.courseID,courseObj.cname,courseObj.credit);
        this.courseList.set(courseObj.courseID,selectedCourse);
    }
    getCourseList(){
        let tmpCourseList = [];
        for(let tmpCourse of this.courseList.values()){
            tmpCourseList.push(tmpCourse);
        }
        return tmpCourseList;
    }
    toTr(){
        let tr = $("<tr></tr>");
        for(let val of this.displayInfo()){
            let td = $("<td></td>");
            td.text(val);
            tr.append(td);
        }
        return tr;
    }
}