"use strict";
(function () {
  let policy = document.querySelector(".js-policy");
  let closeButton = document.querySelector(".js-policy-close");
  const localStorageKey = 'IS_POLICY_SHOWN';

  const fromLocalStorage = window.localStorage.getItem(localStorageKey);

  if (fromLocalStorage) {
    return;
  }

  policy.classList.remove('visually-hidden');

  closeButton.addEventListener('click', () => {
    window.localStorage.setItem(localStorageKey, true);
    policy.classList.add('visually-hidden');
  })

})();
