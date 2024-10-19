// =========== Dom part start ===========
//  ========== Input Dom =====
let numberInput        =     document.querySelectorAll('.numberInput') 

// ========== Button Dom =========

let oneButton       =     document.querySelector('.oneButton')
let twoButton       =     document.querySelector('.twoButton')
let threeButton     =     document.querySelector('.threeButton')
let goButton        =     document.querySelector('.goButton')
let resetButton     =     document.querySelector('.resetButton')

// ========== h2 h3 error dom ===========
let spanOne         =     document.querySelector('.spanOne')
let spanTwo         =     document.querySelector('.spanTwo')
let spanThree       =     document.querySelector('.spanThree')
let card            =     document.querySelectorAll('.card')
let error           =     document.querySelector('.error')


// ========== function part =======

oneButton.addEventListener('click', ()=>{
    if(oneInput.value == '' || oneInput.value == 0){
        error.innerHTML = 'Please Input a number!!!'

    }else{
        error.innerHTML  = ''
        spanOne.innerHTML = oneInput.value
    
    }
})

twoButton.addEventListener('click', ()=>{
    if(twoInput.value == '' || twoInput.value == 0){
        error.innerHTML = 'Please Input a number!!!'

    }else{
        error.innerHTML  = ''
        spanTwo.innerHTML = twoInput.value
    
    }
})

threeButton.addEventListener('click', ()=>{
    if(threeInput.value == '' || threeInput.value == 0){
        error.innerHTML = 'Please Input a number!!!'

    }else{
        error.innerHTML  = ''
        spanThree.innerHTML = threeInput.value
    
    }
})

let addNumber = (item)=>{
    card[item].innerHTML = numberInput[item].value
    card[item].dataset.count = numberInput[item].value
    spanOne[item].innerHTML = numberInput[item].value
    spanTwo[item].innerHTML = numberInput[item].value
    spanThree[item].innerHTML = numberInput[item].value
    numberInput[item].value = ''


}
let startBTN = ()=>{

    card.forEach((item)=>{
        let number = 0
        let plus = ()=>{
            number++
            item.innerHTML = number
            if(number == item.dataset.count){
                clearInterval(stop)
            }
        }
        let stop = setInterval(() => {
            plus()
        }, 100);
    })
}

// // =============== Go button
