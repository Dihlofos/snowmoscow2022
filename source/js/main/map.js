(function () {
  const pins = document.querySelectorAll('.js-pin');
  const vw = window.innerWidth;

  pins.forEach((pin)=>{
    if (!isTouchDevice()) {
      pin.addEventListener('mouseover', () => {
        toggleOpen(pin);
      })

      pin.addEventListener('mouseout', () => {
        pin.classList.toggle('open');
      })
    } else {
      pin.addEventListener('click', () => {
        toggleOpen(pin);
      })
    }

  })

  function isTouchDevice() {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
  }

  function toggleOpen(pin)  {
    pin.classList.toggle('open');

      if (pin.dataset.pin === '4' && vw < 768) {
        const pin6 = document.querySelector('[data-pin="6"]');
        if (pin6.classList.contains('open')) {
          pin6.classList.remove('open')
        }
      }
    }


})();
