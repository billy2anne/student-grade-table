class GradeTable {

  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;

  }

  updateGrades(grades){


    var tBody = this.tableElement.querySelector('tbody');
    $('tBody').empty();

    var gradesList = [];
    for(var i = 0; i < grades.length; i++ ) {
      var grade = grades[i];
      var row = this.renderGradeRow(grade, this.deleteGrade);
      tBody.appendChild(row);
      gradesList.push(grade.grade);
    }

    if(!gradesList[0]){
     var p = $(this.noGradesElement).removeClass('d-none');
    }

    //Calculate Average Students'Grade
    var sum = 0;
    for( var i = 0; i < gradesList.length; i++){
      var studentGrade = gradesList[i];
      sum = sum + studentGrade;
    }

    return Math.round(sum / gradesList.length);
  }

  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade){

    //table data
    var row = document.createElement('tr');
    var grade = data.grade;
    var name = data.name;
    var course = data.course;

    //create table data and modify text content to show student data
    var studentName = document.createElement('td');
    studentName.textContent = name;
    var studentCourse = document.createElement('td');
    studentCourse.textContent = course;
    var studentGrade = document.createElement('td');
    studentGrade.textContent = grade;

    //delete button created with clickhandler added
    var deleteButtonArea = document.createElement('td');
    var deleteButton = document.createElement('button');
    $(deleteButton).addClass("btn btn-danger");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteGrade(data.id));
    deleteButtonArea.append(deleteButton);

    //append new table data to new row
    row.append(studentName, studentCourse, studentGrade, deleteButtonArea);

    return row
  }
}
