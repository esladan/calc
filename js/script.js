let btns = document.querySelectorAll('.btn')
let input = document.querySelector('input')
let top_display = document.querySelector('.top')


btns.forEach(function (btn) {

    if (btn.dataset.btn_content == "=") {
        btn.addEventListener('click',function () {
        let equation = input.value
        input.value = eval(equation) 
        top_display.textContent = equation

        })
    }else{
       btn.addEventListener('click',function () {
       input.value += btn.dataset.btn_content
    }) 
    }
})
