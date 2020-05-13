class GradeForm{
  constructor(formElement){
    debugger;
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.onsubmit = this.handleSubmit;
  }

  onSubmit(createGrade){
    this.createGrade = createGrade;
  }

  handleSubmit(event){
    event.preventDefault();
    var formData = new FormData(event.target);
  }
}
