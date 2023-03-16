const speakers = [
  {
    image: './images/yochai.jpg',
    name: 'Yochai Benkler',
    designation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    details: 'Benkler studies commons-based peer production, and published his seminal books The Wealth of Networks in 2006.',
  },
  {
    image: './images/sohyeong.jpg',
    name: 'SohYeong Noh',
    designation: 'Director of Arts Centre Nabi and a board member of CC Korea',
    details: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    image: './images/lila.jpg',
    name: 'Lila TretiKov',
    designation: 'Executive Director of the Wikimedia Foundation',
    details: 'Lila is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    image: './images/kilnam.jpg',
    name: 'Kilnam Chon',
    designation: '',
    details: "Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the internet society's Hall of Frame.",
  },
  {
    image: './images/julia.jpg',
    name: 'Julia Leda',
    designation: 'President of Young Pirates of Europe',
    details: "Europian ingetration, political democracy and participation of youth through online as her minor condern, Rada's report outlining potential changes to EU copyright law was approved by the Parliament in July.",
  },
  {
    image: './images/ryan.jpg',
    name: 'Ryan Merkley',
    designation: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    details: 'Ryan had been leading open-source projects at Mozilla Foundation such as the open source movement.',
  },
];

// Filling mobile speaker
const sp = document.querySelectorAll('.speaker-det');
for (let i = 0; i < sp.length; i += 1) {
  sp[i].querySelector('.speaker-img img').src = speakers[i].image;
  sp[i].querySelector('.speaker-name').innerHTML = speakers[i].name;
  sp[i].querySelector('.speaker-designation').innerHTML = speakers[i].designation;
  sp[i].querySelector('.speaker-detail').innerHTML = speakers[i].details;
}

// Filling desktop speaker
const spDesk = document.querySelector('.speaker-desktop');

for (let j = 0; j < speakers.length; j += 1) {
  const div = document.createElement('div');
  div.classList.add('speaker-det');

  const img = document.createElement('img');
  img.classList.add('speaker-img');
  img.src = speakers[j].image;
  div.appendChild(img);

  const div2 = document.createElement('div');
  div2.classList.add('inner-speaker');

  const h3 = document.createElement('h3');
  h3.classList.add('speaker-name');
  h3.innerHTML = speakers[j].name;
  div2.appendChild(h3);

  const p1 = document.createElement('p');
  p1.classList.add('speaker-designation');
  p1.innerHTML = speakers[j].designation;
  div2.appendChild(p1);

  const hr = document.createElement('hr');
  hr.classList.add('speaker-hr');
  div2.appendChild(hr);

  const p2 = document.createElement('p');
  p2.classList.add('speaker-detail');
  p2.innerHTML = speakers[j].details;
  div2.appendChild(p2);

  div.appendChild(div2);
  spDesk.appendChild(div);
}

// Accordion setting
const acc = document.querySelector('.accordion');
const panel = document.querySelector('#panel');

acc.addEventListener('click', () => {
  acc.classList.toggle('change');

  if (panel.style.display === 'block') {
    panel.style.display = 'none';
  } else {
    panel.style.display = 'block';
  }
});

// Hide panel when link clicked
const panelLinks = document.querySelectorAll('.drop-link');

for (let i = 0; i < panelLinks.length; i += 1) {
  panelLinks[i].addEventListener('click', () => {
    panel.style.display = 'none';
    acc.classList.toggle('change');
  });
}