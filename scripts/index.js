window.lozad

// вытаскиваю массив данных с json
const response = await fetch('http://127.0.0.1:5500/data.json')
const data = await response.json()

import Manufacturers from './components/Manufacturers.js';
import Card from './components/Card.js';


// СОБВСТВЕННОЕ ПРОИЗВОДСТВО АВТОМОБИЛЬНЫХ ЗАВОДОВ
const one = document.querySelector('.one')

let searchOne = 'Собственное производство автомобильных заводов';
let oneItems = data.filter(el => {
    if(el.Manufacturer_category === searchOne){
        return el

    }
})

const selectOne = new Manufacturers(one,oneItems);
selectOne.setEventListeners();

// функция поиска но есть косяк удаляет все лейблы
const inputOne = document.querySelector('.input__one')
inputOne.addEventListener('input',()=>{
    let valInput = inputOne.value.trim().toUpperCase()
 
    const items = document.querySelectorAll('label')

    if(valInput != ''){
        items.forEach(el=>{

            let word = el.textContent.toUpperCase().replace(/[\s.,]/g, '')
           
            if(word.includes(valInput)){
                el.classList.remove('hide')
            }else(
                el.classList.add('hide')
            )
            
            
        })
    }else{
        items.forEach(el=>{
            el.classList.remove('hide')
        })
    }
   
})



// КОМПЛЕКТУЮЩИЕ-ЗАВОДОВ СМЕЖНИКОВ
const two = document.querySelector('.two')
let searchTwo = 'Комплектующие-заводов смежников';
//фильтранул КОМПЛЕКТУЮЩИЕ-ЗАВОДОВ СМЕЖНИКОВ получаю все обьекты
let twoItems = data.filter(el => {
    if(el.Manufacturer_category === searchTwo){
        return el

    }
})

const selectTwo = new Manufacturers(two,twoItems);
selectTwo.setEventListeners();

// функция поиска но есть косяк удаляет все лейблы
const inputTwo = document.querySelector('.input__two')
inputTwo.addEventListener('input',()=>{
    let valInput = inputTwo.value.trim().toUpperCase()
    
    const items = document.querySelectorAll('label')

    if(valInput != ''){
        items.forEach(el=>{
//обрабатываю строку ввид который мне нужен
            let word = el.textContent.toUpperCase().replace(/[\s.,]/g, '')
           
            if(word.includes(valInput)){
                el.classList.remove('hide')
            }else(
                el.classList.add('hide')
            )
        })
    }else{
        items.forEach(el=>{
            el.classList.remove('hide')
        })
    }
})





// ИМПОРТНЫЕ КОМПЛЕКТУЮЩИЕ 
const three = document.querySelector('.three')
let searchThree = 'Импортные комплектующие';

let threeItems = data.filter(el => {
    if(el.Manufacturer_category === searchThree){
        return el

    }
})

const selectThree= new Manufacturers(three,threeItems);
selectThree.setEventListeners()

// функция поиска но есть косяк удаляет все лейблы
const inputThree = document.querySelector('.input__three')
// console.log(inputThree)
inputThree.addEventListener('input',()=>{
    let valInput = inputThree.value.trim().toUpperCase()
    
    const items = document.querySelectorAll('label')

    if(valInput != ''){
        items.forEach(el=>{
//обрабатываю строку ввид который мне нужен
            let word = el.textContent.toUpperCase().replace(/[\s.,]/g, '')
           
            if(word.includes(valInput)){
                el.classList.remove('hide')
            }else(
                el.classList.add('hide')
            )
        })
    }else{
        items.forEach(el=>{
            el.classList.remove('hide')
        })
    }
})

// КОМПЛЕКТУЮЩИЕ-ЗАВОДОВ СМЕЖНИКОВ
const four = document.querySelector('.four')
let searchFour = 'Альтернатива';
//фильтранул КОМПЛЕКТУЮЩИЕ-ЗАВОДОВ СМЕЖНИКОВ получаю все обьекты
let fourItems = data.filter(el => {
    if(el.Manufacturer_category === searchFour){
        return el

    }
})

const selectFour = new Manufacturers(four,fourItems);
selectFour.setEventListeners()


// функция поиска но есть косяк удаляет все лейблы
const inputFour = document.querySelector('.input__four')
inputFour.addEventListener('input',()=>{
    let valInput = inputFour.value.trim().toUpperCase()
    
    const items = document.querySelectorAll('label')

    if(valInput != ''){
        items.forEach(el=>{
//обрабатываю строку ввид который мне нужен
            let word = el.textContent.toUpperCase().replace(/[\s.,]/g, '')
           
            if(word.includes(valInput)){
                el.classList.remove('hide')
            }else(
                el.classList.add('hide')
            )
        })
    }else{
        items.forEach(el=>{
            el.classList.remove('hide')
        })
    }
})


// СБРОС КНОПКИ

// скнопка сброса
const buttonReset = document.querySelector('.manufacturers__button')
// checkbox для снятие галочки
const element = document.querySelectorAll('input[type=checkbox]');  
// все производители 
const spanEl  = document.querySelectorAll(".dropdown__item")


// вешаю слушатели на каждого производятеля
spanEl.forEach(item=>{
    item.addEventListener('click',function(){
        element.forEach(item=>{
            // сама кнопка сброса
            // ФУНКЦИЯ НЕ ИДЕАЛЬНА ВЕШАЕТ СЛУШАТЕЛЬ ПРИ КАЖДОМ ЧИХЕ! НО РАБОТАЕТ НУЖЕН РЕФАКТОРИНГ
            buttonReset.addEventListener('click',function(){
                item.checked = false
            })
        })
    })
})






const card = new Card(data);
// возвращаю ввиде массива готовые элемменты товаров и добавляю в ДОМ
const contenerCard = document.querySelector('.card__list')



// пагинация
const numberOfItems = card.getElement().length 
let numberPerPage = 10 
// по сколько выводить на страницу карточек
const numberOfPages = Math.ceil (numberOfItems/numberPerPage)

// построение страниц для загрузки
function buildPage( currPage ) { 
    const trimStart = (currPage-1)*numberPerPage 
    const trimEnd = trimStart + numberPerPage 
    
    const newPage = card.getElement().slice(trimStart, trimEnd)
    contenerCard.innerHTML = '';
    newPage.forEach(i=>{
        contenerCard.appendChild(i)
    })

    // показать еще
    let stepShow = 5
    const showMore = document.querySelector('.show-more')
    showMore.addEventListener('click',()=>{
        // console.log('1')
        stepShow += 5;
        const newPage = card.getElement().slice(trimStart, trimEnd+stepShow)
        contenerCard.innerHTML = '';
        newPage.forEach(i=>{
            contenerCard.appendChild(i)
        })
    })

    
}
// перичная отрисовка в качестве аргумента  даю 1 резать карточки начиная с начало.
buildPage(1)

// const contenerCard = document.querySelector('.card__list')
const padenationContainerBtn = document.querySelector('.padenation')

// const pagenDotch = document.querySelector('.pagen__dotch')
// const pagenNextBtn = document.querySelector('.pagen__next')

//рисую кнопки зависисомсти от сраниц первичный
for ( let i=0; i<numberOfPages; i++) {
    const pagenBtn = document.createElement("div");
    pagenBtn.classList.add('pagenumbers')
    pagenBtn.innerText =`${i+1}`
    padenationContainerBtn.append(pagenBtn)

}

// слушатель на кнопки панинаций первичный
const pageNumbersBtn = document.querySelectorAll('.pagenumbers')
pageNumbersBtn.forEach(btn =>{
    // пробегаюсь снова и снимаю выделеную кнопку
    btn.addEventListener('click',()=>{
        pageNumbersBtn.forEach(active=>{
            active.classList.remove('pagen-active')
        })
        
        btn.classList.add('pagen-active')
       
        buildPage(btn.innerText)
        console.log(btn)
    })
})


// сортировка по количеству
const checkUnit = document.querySelector('.check__unit-select')
checkUnit.addEventListener('change',(e)=>{
    numberPerPage = Number(e.target.value)

    buildPage(1)

    //рисую кнопки зависисомсти от сраниц
    const numberOfPages = Math.ceil (numberOfItems/numberPerPage)
    padenationContainerBtn.innerHTML = ' '
    for ( let i=0; i<numberOfPages; i++) {

        const pagenBtn = document.createElement("div");
        pagenBtn.classList.add('pagenumbers')
        pagenBtn.innerText =`${i+1}`
    
        // console.log(pagenBtn)
        // if()
        padenationContainerBtn.append(pagenBtn)
    
    }

    const pageNumbersBtn = document.querySelectorAll('.pagenumbers')

    // слушатель на кнопки панинаций
    pageNumbersBtn.forEach(btn =>{
        // пробегаюсь снова и снимаю выделеную кнопку
        btn.addEventListener('click',()=>{
            pageNumbersBtn.forEach(active=>{
                active.classList.remove('pagen-active')
            })
            
            btn.classList.add('pagen-active')
        
            buildPage(btn.innerText)
            console.log(btn)
        })
    })
})

// соритировка по алфавиту и цене
const choicePrice = document.querySelector('.check__sort')
choicePrice.addEventListener('change',function(e){
    
    // нахожу все карточке на данной странице и сортирую
    const cardCardName = document.querySelectorAll('.card__card-item')
    const arr = [...cardCardName]
    if(e.target.value ==='алфавиту А-Я'){

        contenerCard.innerHTML = ''

        const sortedAlphabet = arr.sort(function(a,b){
            
             const namesA = a.querySelector('.card__card-name').innerHTML.toLocaleUpperCase().replace(/[\s.,%]/g, '')
             const namesB = b.querySelector('.card__card-name').innerHTML.toLocaleUpperCase().replace(/[\s.,%]/g, '')
        
             if(namesA < namesB) { return -1; }
             if(namesA > namesB) { return 1; }
             return 0;
             
         })
         sortedAlphabet.forEach(e=>{
             contenerCard.append(e)
         })
    }

    if(e.target.value ==='цене'){

       contenerCard.innerHTML = ''
       const sortedPrice =  arr.sort(function(a,b){
           
            const priceA = a.querySelector('.backet-add__price').innerHTML
            const priceB = b.querySelector('.backet-add__price').innerHTML
            return priceA - priceB
            
        })
        sortedPrice.forEach(e=>{
            contenerCard.append(e)
        })
    }
})

// сортировка по  переключателю по наличию на cкаладе
const switchBtn = document.querySelector('.switch-btn')
switchBtn.addEventListener('click',function(){
    switchBtn.classList.toggle('switch-on')

    const cardCardName = document.querySelectorAll('.card__card-item')
    const arr = [...cardCardName]

    if( switchBtn.classList.length >1){
        
        const newArr = []
        arr.filter(card =>{

            const remainSelector =  card.querySelector('.backet-add__quantity')
            const remains = remainSelector.innerHTML.replace(/[^0-9,\s]/g,"")
        
            if(Number(remains)>0){
                newArr.push(card)
            }   
        })
        contenerCard.innerHTML = ''
        newArr.forEach(e=>{
            contenerCard.append(e)
        })
        
    }else{
        // запускай построений карточек на страницу
        buildPage(1)
      
    }
})

// lazy load
card.getElement().forEach(card=>{
    const img = card.querySelectorAll('img')
    const observer = lozad(img); 
    observer.observe();
})


