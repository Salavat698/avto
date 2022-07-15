
export default class Card{
    constructor(cardAll){
        this.cardAll = cardAll;
      
        this.newCard = this._creatCard();

        // console.log( this.creatCard())
    }
    _creatCard(){
        const cardTemplateId = document.querySelector('.card-template').content;
     
        let itemNew =  this.cardAll.map(card=>{

            // клониру темплейт конструкцию для карточки-товаров.
            const cardElement = cardTemplateId.cloneNode(true);
            const item = cardElement.querySelector('.card__card-item')
            const img = cardElement.querySelector('.card__card-img')
            const name = cardElement.querySelector('.card__card-name')
            const articul = cardElement.querySelector('.card__card-articul')
            const price = cardElement.querySelector('.backet-add__price')
            const logo = cardElement.querySelector('.card__card-logo')
            const quantity = cardElement.querySelector('.backet-add__quantity')


            

            // показываю текст после добавление в корзину
            const backet = cardElement.querySelector('.backet-add__btn')
            const containetBacket = cardElement.querySelector('.backet-add__position')
            const backetAddAdd = cardElement.querySelector('.backet-add__add')

            backet.addEventListener('click',function(){
                containetBacket.style.display = 'none';
                backetAddAdd.style.display = 'flex'

            })

            // счетчик для корзины
            let count = cardElement.getElementById("buttonCountNumber");

            cardElement.getElementById("buttonCountPlus").onclick = function() {
                count.innerHTML++
            }
            cardElement.getElementById("buttonCountMinus").onclick = function() {
                if(count.innerHTML<=0){
                    alert('Не может быть меньше 0')
                }else{
                    count.innerHTML--
                }
            }
            // наполняю карточки данными из JSON
            // const srcData = cardElement.querySelector([data-src])
            // console.log(img.dataset.src= 'https://www.bsau.ru/upload/iblock/184/no_image.jpg')
            // srcData.value = '22'

            img.dataset.src  = card.Image  !== '' ? card.Image : 'https://www.bsau.ru/upload/iblock/184/no_image.jpg' ;
            name.innerHTML = card.Manufacturer;
            articul.innerHTML = `Артикул:${card.Articul}шт`;
            price.innerHTML = card.Price;
            logo.src = card.logo;
            quantity.innerHTML = `На складе: ${card.Stock}шт`;

            return item
            
        })

        return itemNew
        
    }
    getElement(){
        return this.newCard;
    }
}
