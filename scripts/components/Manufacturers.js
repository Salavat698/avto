// dropdown
export default class Manufacturers{
    constructor(manufacturersBox,manufacturersItems){

        this.manufacturersBox = manufacturersBox;

     
        //здесь обьекты нужных производителей
        this.manufacturersItems = manufacturersItems
        // вызываю готовую карточку
        this.addManufacturersItems();
        this.searchInput = this.manufacturersBox.querySelector('.dropdown__input');
    }
    //ОТРЫВАЮ ЗАКРЫВАЮ ДРОПДАУН
    setEventListeners(){

        const dropdownName =  this.manufacturersBox.querySelector('.dropdown__name')
        const dropdownContent =  this.manufacturersBox.querySelector('.dropdown__content')
     
        dropdownName.addEventListener('click',function(){
            dropdownContent.classList.toggle('dropdown__show')
        })
    }
    // добавление производителей
    addManufacturersItems(){
        //выбрал куда буду вставлять список
        const dropdownContent =  this.manufacturersBox.querySelector('.dropdown__items')

  
        //использую темплейд для селекторов для заполнение
       this.manufacturersItems.forEach(item=>{

        const itemTemplateId = document.querySelector('.manufacturers-template').content;
        const itemElement = itemTemplateId.cloneNode(true);
        const itemNew = itemElement.querySelector('.dropdown__item');
            itemNew.innerHTML = item.Manufacturer;
             //добавляю список
        dropdownContent.append(itemElement)
        return itemElement
        })
       

    
    }

}
