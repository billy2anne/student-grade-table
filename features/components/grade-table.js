class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement
  }

  updateGrades(grades){
    var tBody = this.tableElement.querySelector('tbody');
    for(var i = 0; i < grades.length; i++){
      var grade = grades[i].grade;
      var name = grades[i].name;
      var course = grades[i].course;

      var row = document.createElement('tr');
      var studentName = document.createElement('td');
      studentName.textContent = name;
      var studentCourse = document.createElement('td');
      studentCourse.textContent = course;
      var studentGrade = document.createElement('td');
      studentGrade.textContent = grade;

      row.append(studentName, studentCourse, studentGrade);
      tBody.appendChild(row);
    }
  }
}
