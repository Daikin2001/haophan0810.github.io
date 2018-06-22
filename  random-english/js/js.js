const btnRandom = document.getElementById('random');
const waiting = document.querySelectorAll('.waiting');
const cardStudent = document.querySelectorAll('.card-student__inner');
const copy = document.querySelectorAll('.copy-icon');
const allStudents = [trainee3398,trainee3517,trainee4574,trainee4766,trainee6090,trainee7375,
trainee7591,trainee7626,trainee7627,trainee7664,trainee7726,trainee7731,trainee7748,trainee7755,trainee7758,
trainee7843,trainee7844,trainee7873,trainee7932,trainee7933,trainee7951,trainee7942,
trainee7951,trainee7991,trainee8028]
console.log('allStudents.length :', allStudents);

function renderStudent(e){
    this.style.pointerEvents = 'none';
    // get student 1
    let index1 = random(allStudents.length);
    let dataStudent1 = allStudents[index1];
    console.log('dataStudent1 :', dataStudent1);

    //get student 2
    let currentAllStudents = allStudents.filter( item => {
        return item.id != dataStudent1.id;
    })
    let index2 = random(currentAllStudents.length);
    let dataStudent2 = currentAllStudents[index2];
    console.log('dataStudent2 :', dataStudent2);
    renderData(dataStudent1,'student-1');
    renderData(dataStudent2,'student-2');
    
    // show waiting
    waiting.forEach(element => {
        element.classList.add('js-show');
    });
    setTimeout(showStudent, 2000);    
}

function showStudent(){
    waiting.forEach(element => {
        element.classList.remove('js-show');
    });
    cardStudent.forEach(element => {
        element.classList.add('js-show');
    });

}
function random (number){
   return Math.floor((Math.random() * number));
}

function copyData(){
    const copyValue = this.previousSibling.previousSibling;
    copyValue.select();
    document.execCommand("copy");
console.log('copyValue.value :', copyValue.value);
console.log('this :', this.previousSibling.previousSibling);
}
function renderData (data,id){
    const name = document.querySelector(`#${id} .student__name`);
    const idStudent = document.querySelector(`#${id} .student__id`);
    const mail = document.querySelector(`#${id} .student__email`);
    name.innerHTML = data.name;
    idStudent.innerHTML=data.id;
    mail.innerHTML=data.mail;

    console.log('mail :', mail);
}
btnRandom.addEventListener('click',renderStudent);

copy.forEach(element => {
    element.addEventListener('click',copyData); 
});