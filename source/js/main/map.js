(function () {
  const pins = document.querySelectorAll('.js-pin');
  const vw = window.innerWidth;

  pins.forEach((pin)=>{
    pin.addEventListener('click', () => {
      pin.classList.toggle('open');

      if (pin.dataset.pin === '4' && vw < 768) {
        const pin6 = document.querySelector('[data-pin="6"]');
        if (pin6.classList.contains('open')) {
          pin6.classList.remove('open')
        }
      }
    })
  })


})();
