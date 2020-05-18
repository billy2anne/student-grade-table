var table = document.querySelector('table');
var header = document.querySelector('header');
var form = document.querySelector('form');
var ptag = document.querySelector('p');

//instantiate classes
var gradeTable = new GradeTable(table, ptag);
var testPageHeader = new PageHeader(header);
var gradeForm = new GradeForm(form);
var testApp =  new App(gradeTable, testPageHeader, gradeForm);

//test methods
testApp.start();
