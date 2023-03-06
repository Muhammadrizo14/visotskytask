let openPopUp = document.querySelector('.button')
let popupWrapp = document.querySelector('.popup__wrapp')
let popupClose = document.querySelector('.popup__close')


function hidePopup() {
  popupWrapp.style.opacity = '0'
  popupWrapp.style.visibility = 'hidden'
}

function showPopup() {
  popupWrapp.style.opacity = '1'
  popupWrapp.style.visibility = 'visible'
}

openPopUp.addEventListener('click', ()=> {
  showPopup()
  document.body.addEventListener('click', (event)=> {
    if(event.composedPath()[0].className === 'popup__wrapp') {
      hidePopup()
    }
  })
})

popupClose.addEventListener('click', hidePopup)
