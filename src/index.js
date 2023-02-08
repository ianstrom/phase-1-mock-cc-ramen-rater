// write your code here
let menu = document.querySelector('#ramen-menu')
let ramenImg = document.querySelector('.detail-image')
let ramenName = document.querySelector('.name')
let ramenRest = document.querySelector('.restaurant')
let rating = document.querySelector('#rating-display')
let comment = document.querySelector('#comment-display')
let form = document.querySelector('#new-ramen')
let inputName = document.querySelector('#new-name')
let inputRest = document.querySelector('#new-restaurant')
let inputImg = document.querySelector('#new-image')
let inputRating = document.querySelector('#new-rating')
let inputComment = document.querySelector('#new-comment')

fetch('http://localhost:3000/ramens')
    .then(data => data.json())
    .then(data => data.forEach(ramen => {
        let img = document.createElement('img')
        img.src = ramen.image
        menu.append(img)
        img.addEventListener('click', () => {
            renderRamen(ramen);
        })
    }),
        addNewRamen()
    )

function renderRamen(ramen) {
    ramenImg.src = ramen.image
    ramenName.textContent = ramen.name
    ramenRest.textContent = ramen.restaurant
    rating.textContent = ramen.rating
    comment.textContent = ramen.comment
}

function addNewRamen() {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let newRamen = {
            "name": inputName.value,
            "restaurant": inputRest.value,
            "image": inputImg.value,
            "rating": inputRating.value,
            "comment": inputComment.value,
        }
        let img = document.createElement('img')
        img.src = newRamen.image
        menu.append(img)
        img.addEventListener('click', () => {
            renderRamen(newRamen)
        })
    })
}

