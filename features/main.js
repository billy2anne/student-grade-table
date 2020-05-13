var table = document.querySelector('table');
var header = document.querySelector('header');

var form = document.querySelector('form');

//instantiate classes
var gradeTable = new GradeTable(table);
var testPageHeader = new PageHeader(header);
var gradeForm = new GradeForm(form);
var testApp =  new App(gradeTable, testPageHeader, gradeForm);

//test methods
testApp.start();
