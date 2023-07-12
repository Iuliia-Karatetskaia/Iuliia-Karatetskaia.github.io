import '../../node_modules/swiper/swiper.scss'
import '../../node_modules/swiper/modules/pagination.scss'
import '../../node_modules/swiper/modules/navigation.scss'
import '../scss/style.scss'

import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

let init = false
let firstSwiper
let secondSwiper
let thirdSwiper
let paginationStatus = document.getElementsByClassName('swiper-pagination')

function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true
      for (let i = 0; i < paginationStatus.length; i++) {
        paginationStatus[i].classList.remove('pagination--hidden')
      }
      firstSwiper = new Swiper('.brand-list__container', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: false,

        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        autoHeight: true,
        slidesPerView: 'auto',
        watchOverflow: true,
        spaceBetween: 16,
        speed: 800
      })
      secondSwiper = new Swiper('.equipment-list__container', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: false,

        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        autoHeight: true,
        slidesPerView: 'auto',
        watchOverflow: true,
        spaceBetween: 16,
        speed: 800
      })
      thirdSwiper = new Swiper('.price-list__container', {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: false,

        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },

        autoHeight: true,
        slidesPerView: 'auto',
        watchOverflow: true,
        spaceBetween: 16,
        speed: 800
      })
    }
  } else if (init) {
    firstSwiper.destroy()
    secondSwiper.destroy()
    thirdSwiper.destroy()
    init = false
    for (let i = 0; i < paginationStatus.length; i++) {
      paginationStatus[i].classList.add('pagination--hidden')
    }
  }
}
swiperCard()
window.addEventListener('resize', swiperCard)

let buttonShow = document.getElementsByClassName('show-all')
let button = document.getElementsByClassName('show-all__button')
const firstContainer = document.querySelector('.content__text')
const secondContainer = document.querySelector('.brand-list__container')
const thirdContainer = document.querySelector('.equipment-list__container')

let arrayButton = [
  {
    buttonShow,
    button,
    container: firstContainer,
    condition: true
  },

  {
    buttonShow,
    button,
    container: secondContainer,
    condition: true
  },

  {
    buttonShow,
    button,
    container: thirdContainer,
    condition: true
  }
]

for (let i = 0; i < arrayButton.length; i++) {
  arrayButton[i].buttonShow = buttonShow[i]
  arrayButton[i].button = button[i]
}

let buttonClick = function (object) {
  object.button.addEventListener('click', function () {
    if (object.condition) {
      object.container.classList.add('container--expand')
      object.button.value = 'Скрыть'
      object.buttonShow.classList.add('show-all--active')
      object.condition = false
    } else {
      object.container.classList.remove('container--expand')
      object.button.value = 'Показать все'
      object.buttonShow.classList.remove('show-all--active')
      object.condition = true
    }
  })
}

for (let i = 0; i < arrayButton.length; i++) {
  buttonClick(arrayButton[i])
}

const openBurger = document.querySelector('.burger-menu')
const body = document.querySelector('.body')
const mainMenu = document.querySelector('.container__wrapper-menu')
let requestCall = document.getElementsByClassName('phone')
const call = document.querySelector('.container__wrapper-call')
let feedbackSend = document.getElementsByClassName('chat')
const feedback = document.querySelector('.container__wrapper-feedback')

let unlock = true

if (openBurger) {
  openBurger.addEventListener('click', function () {
    popupOpen(mainMenu)
  })
}

if (requestCall.length > 0) {
  for (let i = 0; i < requestCall.length; i++) {
    let button = requestCall[i]
    button.addEventListener('click', function () {
      popupOpen(call)
    })
  }
}

if (feedbackSend.length > 0) {
  for (let i = 0; i < feedbackSend.length; i++) {
    let button = feedbackSend[i]
    button.addEventListener('click', function () {
      popupOpen(feedback)
    })
  }
}

let popupCloseIcon = document.getElementsByClassName('popup-close')

if (popupCloseIcon.length > 0) {
  for (let i = 0; i < popupCloseIcon.length; i++) {
    const elem = popupCloseIcon[i]
    elem.addEventListener('click', function () {
      popupClose(elem.closest('.popup'), unlock)
    })
  }
}

function popupOpen(popupName) {
  if (popupName) {
    const popupActive = document.querySelector('.popup-open')
    if (popupActive) {
      popupClose(popupActive)
    }
    bodyLock()
    popupName.classList.add('popup-open')
    popupName.addEventListener('click', function (evt) {
      if (!evt.target.closest('.popup-content')) {
        popupClose(evt.target.closest('.popup'))
      }
    })
  }
}

function popupClose(popupActive, unlock) {
  if (popupActive) {
    popupActive.classList.remove('popup-open')
  }
  if (!unlock) {
    bodyUnlock()
  }
}

function bodyLock() {
  body.classList.add('lock')
  unlock = false
}

function bodyUnlock() {
  body.classList.remove('lock')
  unlock = true
}

;(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      let node = this
      while (node) {
        if (node.matches(css)) return node
        else node = node.parentElement
      }
      return null
    }
  }
})()
;(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector
  }
})()
