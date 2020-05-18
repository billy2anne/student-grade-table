class App {
  constructor(gradeTable, pageHeader, gradeForm){
    this.handleGetGradesError =  this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }

  handleGetGradesError(error){
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    var currentAverage = this.gradeTable.updateGrades(grades);
    this.pageHeader.updateAverage(currentAverage)
  }

  getGrades(){
    $.ajax({
      type: "GET",
      url:"https://sgt.lfzprototypes.com/api/grades",
      headers:{
        "X-Access-Token": "3A1U0wCu"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }

  start(){
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }

  createGrade(name, course, grade){
    $.ajax({
      type: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {
      "X-Access-Token": "3A1U0wCu"
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade,
      },
      success: this.handleCreateGradesSuccess,
      error: this.handleCreateGradesError
    })
  }

  handleCreateGradeError(error){
    console.error(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  deleteGrade(id){
    console.log(id);
  }

  handleDeleteGradeError(error){
    console.error(error);
  }

  handleDeleteGradeSuccess(){
    this.getGrades();
  }
}
