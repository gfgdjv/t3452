
// Дан инпут и абзац. При клике на кнопку запишите значение инпута в конец текста абзаца.


// Дан инпут. В него вводится число. При клике на кнопку найдите сумму цифр этого числа.


// В инпут вводится ФИО через пробел. При клике на кнопку запишите фамилию, имя и отчество в анкету.


// Дан инпут. В него вводится текст. При клике на кнопку узнайте количество слов в этом тексте.


let myForm = document.forms.myForm;
let text = document.querySelector('#text');
let elements = myForm.elements;
let addText = elements.addText;
let input = elements.str;

addText.addEventListener('click', function(event) {
    event.preventDefault();
    let str = input.value;
    let mas = str.split("");
    console.log(mas);
    let array = [];
    mas.forEach(function (element) {
        array.push(+element);
    })

    console.log(array);
})