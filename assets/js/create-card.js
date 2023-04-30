var colunaToDo = document.getElementById('colunaToDo')
var colunaDoing = document.getElementById('colunaDoing')
var colunaDone = document.getElementById('colunaDone')
var trashCollum = document.getElementById('trashCollum')

var user_img_1 = document.getElementById('first-img')
var user_img_2 = document.getElementById('user-2')

var btnOpenModal = document.getElementById('btnOpenModal')

var modalCreateCard = document.getElementById('modalCreateCard')
var closeModal = document.getElementById('close-modal')
var btnCreateCard = document.getElementById('btnCreateTask')

var txtTitle = document.getElementById('txtTitle')
var txtDescript = document.getElementById('txtDescript')
var selectAuthor = document.getElementById('selectAuthor')
var selectUrgency = document.getElementById('selectUrgency')

var countToDo = document.getElementById('countToDo')
var countDoing = document.getElementById('countDoing')
var countDone = document.getElementById('countDone')


var img1 = 'https://i.pinimg.com/280x280_RS/67/84/49/678449c80dbe78adf4ad7c8d01a18e30.jpg'
var img2 = 'https://i.pinimg.com/564x/07/d0/f8/07d0f8c0b3535422fc0b48f276b3c996.jpg'

user_img_1.src = img1
user_img_2.src = img2

setInterval(function() {
    countToDo.innerText = colunaToDo.childNodes.length - 1
    countDoing.innerText = colunaDoing.childNodes.length - 1
    countDone.innerText = colunaDone.childNodes.length - 1
}, 100)

btnOpenModal.addEventListener('click', function() {
    modalCreateCard.style.display = 'flex'
})

closeModal.addEventListener('click', function() {
    modalCreateCard.style.display = 'none'
})

function confetti() {
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    confetti({
        angle: randomInRange(40, 45),
        spread: randomInRange(20, 1),
        particleCount: randomInRange(90, 100),
        origin: {
            y: 0.0
        },
    });
}


btnCreateCard.addEventListener('click', function() {

    var card = document.createElement('div')
    var card_title = document.createElement('h3')
    var card_descript = document.createElement('p')
    var card_section = document.createElement('section')
    var card_img = document.createElement('img')
    var card_alert = document.createElement('p')
    var card_remove = document.createElement('ion-icon')
    var card_play = document.createElement('ion-icon')
    var cardID_element = document.createElement('p')

    card_remove.name = 'trash-outline'
    card_remove.style.color = '#fff'


    card_title.innerText = txtTitle.value
    card_descript.innerText = txtDescript.value

    if (selectAuthor.value == '1') {
        card_img.src = img1
    } else if (selectAuthor.value == '2') {
        card_img.src = img2
    }

    if (selectUrgency.value == '1') {
        card_alert.classList.add('urg')
        card_alert.classList.add('leve')
        card_alert.innerText = 'Leve'
    } else if (selectUrgency.value == '2') {
        card_alert.classList.add('urg')
        card_alert.classList.add('media')
        card_alert.innerText = 'Média'
    } else if (selectUrgency.value == '3') {
        card_alert.classList.add('urg')
        card_alert.classList.add('alta')
        card_alert.innerText = 'Alta'
    }

    card.appendChild(card_title)
    card.appendChild(card_descript)
    card.appendChild(card_section)
    card_section.appendChild(card_img)
    card_section.appendChild(card_alert)
        //card.appendChild(card_remove)
    card.appendChild(card_play)
    card.appendChild(cardID_element)

    card.classList.add('card')
    card_section.classList.add('card-creator')
    card_remove.name = 'trash-outline'
    card_remove.style.color = '#fff'
    card_play.name = 'play'
    card_play.style.color = '#fff'
    card_play.classList.add('playTask')
    cardID_element.style.fontSize = '0'
    cardID_element.style.position = 'absolute'

    //eventos
    card_remove.onclick = function(card) {
        var cardParent = this.parentNode
        cardParent.style.display = 'none'
            // trashCollum.appendChild(cardParent)
    }

    card_play.onclick = function(card) {

        var cardParent = this.parentNode
        if (this.name == 'checkmark-done-circle-sharp') {
            colunaDone.appendChild(cardParent)
            this.style.color = 'springgreen'
                // confetti()
        } else {
            colunaDoing.appendChild(cardParent)
            this.name = 'checkmark-done-circle-sharp'

        }

    }




    colunaToDo.appendChild(card)

    modalCreateCard.style.display = 'none'

    var jsonCard = {
        title: txtTitle.value,
        desc: txtDescript.value,
        urgency: selectUrgency.value,
        img: card_img.src,
        col: 1
    }

    localStorage.setItem((localStorage.length), JSON.stringify(jsonCard))
    cardID_element.innerText = localStorage.length - 1

})

function loadCards() {



    for (var i = 0; i < localStorage.length; i++) {

        console.log(i + ', key: ' + localStorage.key(i) + ', coluna:' + JSON.parse(localStorage.getItem(i)).col)

        var card = document.createElement('div')
        var card_title = document.createElement('h3')
        var card_descript = document.createElement('p')
        var card_section = document.createElement('section')
        var card_img = document.createElement('img')
        var card_alert = document.createElement('p')
        var card_remove = document.createElement('ion-icon')
        var card_play = document.createElement('ion-icon')
        var cardID_element = document.createElement('p')

        card_title.innerText = JSON.parse(localStorage.getItem(i)).title
        card_descript.innerText = JSON.parse(localStorage.getItem(i)).desc
        card_img.src = JSON.parse(localStorage.getItem(i)).img
        card_alert.innerText = JSON.parse(localStorage.getItem(i)).urgency

        card.appendChild(card_title)
        card.appendChild(card_descript)
        card.appendChild(card_section)
        card_section.appendChild(card_img)
        card_section.appendChild(card_alert)
        card.appendChild(card_remove)
        card.appendChild(card_play)
        card.appendChild(cardID_element)

        card.classList.add('card')
        card_section.classList.add('card-creator')
        card_alert.classList.add('urg')
        card_remove.name = 'trash-outline'
        card_remove.style.color = '#fff'
        card_remove.style.display = 'none'
        card_play.classList.add('playTask')
        cardID_element.innerText = localStorage.key(i)
        cardID_element.style.fontSize = '0'
        cardID_element.style.position = 'absolute'

        //carregar urgencia
        if (JSON.parse(localStorage.getItem(i)).urgency == 1) {
            card_alert.innerText = 'Leve'
            card_alert.classList.add('leve')
        } else if (JSON.parse(localStorage.getItem(i)).urgency == 2) {
            card_alert.innerText = 'Média'
            card_alert.classList.add('media')
        } else {
            card_alert.innerText = 'Alta'
            card_alert.classList.add('alta')
        }

        //carregar coluna
        if (JSON.parse(localStorage.getItem(i)).col == 1) {
            card_play.name = 'play'
            card_play.style.color = '#fff'
            colunaToDo.appendChild(card)
        } else if (JSON.parse(localStorage.getItem(i)).col == 2) {
            card_play.name = 'checkmark-done-circle-sharp'
            card_play.style.color = '#fff'
            colunaDoing.appendChild(card)
        } else {
            card_play.name = 'checkmark-done-circle-sharp'
            card_play.style.color = 'springgreen'
            colunaDone.appendChild(card)
        }

        //eventos
        card_remove.onclick = function(card) {
            var cardParent = this.parentNode
            cardParent.style.display = 'none'
                // trashCollum.appendChild(cardParent)
        }

        card_play.onclick = function(card) {

            var cardParent = this.parentNode

            if (this.name == 'checkmark-done-circle-sharp') {

                colunaDone.appendChild(cardParent)
                this.style.color = 'springgreen'

                var parentElements = this.parentNode
                var cardKey = parentElements.childNodes[5].innerText
                var currentOBJ = localStorage.getItem(cardKey)

                var updateOBJ = JSON.parse(currentOBJ)
                updateOBJ.col = 3

                localStorage.setItem(cardKey, JSON.stringify(updateOBJ))

                console.log(cardKey)
                console.log(JSON.parse(currentOBJ))
                console.log(updateOBJ.col)

                console.log('Card: ' + cardKey + ', agora na COL: ' + updateOBJ.col)


            } else {

                colunaDoing.appendChild(cardParent)
                this.name = 'checkmark-done-circle-sharp'

                var parentElements = this.parentNode
                var cardKey = parentElements.childNodes[5].innerText
                var currentOBJ = localStorage.getItem(cardKey)

                var updateOBJ = JSON.parse(currentOBJ)
                updateOBJ.col = 2

                localStorage.setItem(cardKey, JSON.stringify(updateOBJ))

                console.log(cardKey)
                console.log(JSON.parse(currentOBJ))
                console.log('Card: ' + cardKey + ', agora na COL: ' + updateOBJ.col)


            }

        }

    }

}