class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement
  }

  updateGrades(grades){
    console.log(grades);
    var tBody = this.tableElement.querySelector('tbody');
    console.log(tBody);
  }
}
