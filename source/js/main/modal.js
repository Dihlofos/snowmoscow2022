"use strict";
(function () {

  const modal = document.querySelector('.js-modal');
  const modalClose = document.querySelectorAll('.js-modal-close');

  modalClose.forEach((button) => {
    button.addEventListener('click', ()=>{
      modal.classList.add('fadeOut');
      setTimeout(()=>{
        modal.classList.add('visually-hidden');
      },300)
    })
  })
})();
