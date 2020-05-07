class App {
  constructor(gradeTable){
    this.handleGetGradesError =  this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
  }

  handleGetGradesError(error){
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    debugger;
    console.log(grades);
    this.gradeTable.updateGrades(grades);
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
  }
}
