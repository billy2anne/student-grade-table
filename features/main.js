var table = document.querySelector('table');
var header = document.querySelector('header');

//instantiate classes
var gradeTable = new GradeTable(table);
var testPageHeader = new PageHeader(header);
var testApp =  new App(gradeTable, testPageHeader);

//test methods
testApp.start();
