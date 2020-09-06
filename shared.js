let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modalNoButton = document.querySelector('.modal__action--negative');
let selectPathButtons = document.querySelectorAll('.path button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');


for (let i = 0; i < selectPathButtons.length; i++) {
  selectPathButtons[i].addEventListener('click', () => {
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

backdrop.addEventListener('click', ()=> {
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
})