class App {
  constructor(){
    this.handleGetGradesError =  this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }

  handleGetGradesError(error){
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    console.log(grades);
  }

  getGrades(){
    debugger;
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
