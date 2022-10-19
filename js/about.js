const menuBar = document.getElementById('menu-bar');
const dropDown = document.getElementById('drop-down');
const portfolioLink = document.getElementById('first-link');
const aboutLink = document.getElementById('second-link');
const contactLink = document.getElementById('third-link');

let isShown = false;

const toggleDropDown = () => {
  isShown = !isShown;
  if (isShown === true) {
    dropDown.style.display = 'flex';
    dropDown.style.transform = 'translateX(0%)';
    menuBar.className = 'fa-regular fa-x';
    document.body.style.position = 'fixed';
  } else {
    dropDown.style.transform = 'translateX(-100%)';
    menuBar.className = 'fa-solid fa-bars';
    document.body.style.position = '';
  }
};
menuBar.addEventListener('click', toggleDropDown);
const removeModal = () => {
  dropDown.style.display = 'none';
  dropDown.style.transform = 'translateX(-100%)';
  menuBar.className = 'fa-solid fa-bars';
  isShown = false;
  document.body.style.position = '';
};

portfolioLink.addEventListener('click', removeModal);
aboutLink.addEventListener('click', removeModal);
contactLink.addEventListener('click', removeModal);

if (window.innerWidth < 768) {
  const main = document.getElementById('main-section');
  const footer = document.getElementById('footer');
  main.insertAdjacentHTML('beforeend', '<section class="partners-section"> <h2>Partners</h2> <div class="underline"></div> <div class="partners"><a href="https://www.mozilla.org/en-US/foundation/" target="_blank"><img src="../assets/mozilla.png" alt="mozilla logo"></a><a href="https://www.google.com/" target="_blank"><img src="../assets/google.png" alt="google logo"></a><a href="http://www.naver.com/" target="_blank"><img src="../assets/naver.png" alt="naver logo"></a><a href="http://www.kakaocorp.com/" target="_blank"><img src="../assets/kakao.png" alt="kakao logo"></a><a href="https://www.airbnb.co.kr/" target="_blank"><img src="../assets/airbnb.png" alt="airbnb logo"> </a></div></section>');
  footer.style.backgroundColor = 'white';
  footer.style.color = 'rgb(51, 45, 45)';
}