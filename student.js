class Courses{
  constructor(){
    this.courses = [];
  }
  addSubjects(cid, course_name, creadit, cource_acronomy,instroctorId){
    this.courses.push({cid, course_name, creadit, cource_acronomy,instroctorId});
    // console.log(this.courses)
  }
  updateInstructor(cid,newInstructorId){
    let idx = this.courses.findIndex(course=> course.cid === cid);
    if(idx>=0){
      this.courses[idx].instroctorId=newInstructorId;

    }else{
      console.log("Instructor not found")
    }
  }
}
const course = new Courses();
course.addSubjects(1,'bio',5,'BIO100',"j23PT");
course.addSubjects(7,'chem',5,'CHM100',"TX23WA");
course.addSubjects(3,'English',5,'ENG100',"Qe423");
course.addSubjects(8, "CS", 5, "CS100", "MI100");

course.updateInstructor(3,'SAM256');
console.log(course.courses)

