var table = document.querySelector('table');
var header = document.querySelector('header');

var gradeTable = new GradeTable(table);
var testPageHeader = new PageHeader(header);
var testApp =  new App(gradeTable);

testApp.start();
testPageHeader.updateAverage(20);
