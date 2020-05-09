class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement
  }

  updateGrades(grades){
    //emptyBody
    var tBody = this.tableElement.querySelector('tbody');
    $('tBody').empty();
    var avgGrades = [];

    for(var i = 0; i < grades.length; i++){
    //store table data
      var grade = grades[i].grade;
      var name = grades[i].name;
      var course = grades[i].course;

    //create table data and modify text content to show student data
      var row = document.createElement('tr');
      var studentName = document.createElement('td');
      studentName.textContent = name;
      var studentCourse = document.createElement('td');
      studentCourse.textContent = course;
      var studentGrade = document.createElement('td');
      studentGrade.textContent = grade;

    //append new table data to new row and then append row to table body
      row.append(studentName, studentCourse, studentGrade);
      tBody.appendChild(row);
      avgGrades.push(grade);
    }

    //Calculate Average Students'Grade
    var sum = 0;
    for( var i = 0; i < avgGrades.length; i++){
      var studentGrade = avgGrades[i];
      sum = sum + studentGrade;
      var numberOfStudents = avgGrades.length;
      var average = sum/numberOfStudents
    }
    return average;
  }
}
