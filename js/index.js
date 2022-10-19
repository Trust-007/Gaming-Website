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

// dynamic rendering of speakers

const speakers = [
  {
    id: '1',
    name: 'Bobby Kotick',
    status: 'CEO of Activision Blizzard.',
    image: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRsrbAMI4rXeNmZ187bn5fGYG1F0-GA-oIrdqM_OdzTi7O2sMUoMiAX6j8FfDz99uA8',
    alt: 'Picture of Bobby Kotick',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima earum inventore magnam ab explicabo totam? Odio omnisrepellendu',
  },
  {
    id: '2',
    name: 'Andrew Paradise',
    status: 'CEO of Skillz.',
    image: 'https://media.gettyimages.com/photos/andrew-paradise-founder-and-chief-executive-officer-of-skillz-smiles-picture-id460558278',
    alt: 'picture of Andrew Paradise',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima earum inventore magnam ab explicabo totam? Odio omnisrepellendu',
  },
  {
    id: '3',
    name: 'Frank D. Gibeau',
    status: 'Chief Executive Officer of Zynga.',
    image: 'https://www.zynga.com/storage/2018/09/leadership-img1-1.png',
    alt: 'picture of Frank D. Gibeau',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima earum inventore magnam ab explicabo totam? Odio omnisrepellendu',
  },
  {
    id: '4',
    name: 'Andrew Wilson',
    status: 'Chief Executive Officer of Electronic Arts.',
    image: 'https://news-cdn.softpedia.com/images/news2/Electronic-Arts-Appoints-Andrew-Wilson-as-New-CEO-383860-2.jpg',
    alt: 'Picture of Andrew Wilson',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima earum inventore magnam ab explicabo totam? Odio omnisrepellendu',
  },
  {
    id: '5',
    name: 'John Riccitiello',
    status: 'Chief Executive Officer of Unity Technologies.',
    image: 'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ7UObWfNMu_4tQslNcBxTe5tm8kSahHPjbiI6fwGHmKRMIpJ8iPfhh01a-rOHaIIxQ',
    alt: 'Picture of John Riccitiello',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima earum inventore magnam ab explicabo totam? Odio omnisrepellendu',
  },
  {
    id: '6',
    name: 'Kati Levoranta',
    status: 'Partner and EVP at P2X Solutions Oy.',
    image: 'https://www.finavia.fi/sites/default/files/styles/content_box/public/images/2021-04/KatiLevoranta1.jpg?itok=D_WNYGSf',
    alt: 'Picture of Kati Levoranta',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima earum inventore magnam ab explicabo totam? Odio omnisrepellendu',
  },
];

speakers.map((item) => {
  const parentContainer = document.getElementById('speakers');
  const speaker = document.createElement('div');
  speaker.className = 'speaker';
  const speakerImg = document.createElement('img');
  speakerImg.className = 'speaker-img';
  speakerImg.src = item.image;
  speakerImg.alt = item.alt;
  speaker.appendChild(speakerImg);

  const speakerDetail = document.createElement('div');
  speakerDetail.className = 'speaker-details';
  const name = document.createElement('h3');
  name.innerHTML = item.name;
  speakerDetail.appendChild(name);
  const status = document.createElement('h4');
  status.innerHTML = item.status;
  speakerDetail.appendChild(status);
  const underline = document.createElement('div');
  underline.className = 'underline2';
  speakerDetail.appendChild(underline);
  const description = document.createElement('p');
  description.innerHTML = item.description;
  speakerDetail.appendChild(description);
  speaker.appendChild(speakerDetail);

  return parentContainer.appendChild(speaker);
});