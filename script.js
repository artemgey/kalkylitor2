let input = document.querySelector('#display');
let key = document.querySelector('.key')
let keyboard = document.querySelectorAll('.key')
let exp = '';
for (let key of keyboard) {
    key.addEventListener('click', function () {
        exp = exp + key.textContent;
        input.value = exp;
        console.log(input);
    })
}
let reset = document.querySelector("#reset")
reset.addEventListener('click ',function(){
    input.preventDefault
})
