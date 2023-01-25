classs Courses{
  constructor(){
    this.courses = [];
  }
  addSubjects(cid, course_name, creadit, cource_acronomy,instroctorId){
    this.courses.push(cid, course_name, creadit, cource_acronomy,instroctorId);
  }
  updateInstructor(cid,newInstructorId){
    let idx = this.courses.findIndex(course=> course.cid === cid);
    if(idx>=0){
      this.courses[idx].instroctorId=newInstructorId;
    }else
  }
}
