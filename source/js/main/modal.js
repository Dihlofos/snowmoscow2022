"use strict";
(function () {

  const modal = document.querySelector('.js-modal');
  const modalClose = document.querySelectorAll('.js-modal-close');

  if (!modalClose.length | !modal) {
    return;
  }
  modalClose.forEach((button) => {
    button.addEventListener('click', ()=>{
      modal.classList.add('fadeOut');
      setTimeout(()=>{
        modal.classList.add('visually-hidden');
      },300)
    })
  })
})();
