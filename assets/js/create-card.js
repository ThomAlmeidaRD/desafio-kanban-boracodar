var colunaToDo = document.getElementById('colunaToDo')
var colunaDoing = document.getElementById('colunaDoing')
var colunaDone = document.getElementById('colunaDone')

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



btnCreateCard.addEventListener('click', function() {

    var card = document.createElement('div')
    var card_title = document.createElement('h3')
    var card_descript = document.createElement('p')
    var card_section = document.createElement('section')
    var card_img = document.createElement('img')
    var card_alert = document.createElement('p')

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

    card.classList.add('card')
    card_section.classList.add('card-creator')


    card.addEventListener('click', function() {
        colunaDoing.appendChild(card)
    })

    card.addEventListener('dblclick', function() {
        colunaDone.appendChild(card)
    })

    colunaToDo.appendChild(card)

    modalCreateCard.style.display = 'none'

})