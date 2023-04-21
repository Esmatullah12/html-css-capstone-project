const navBtn = document.querySelector('.nav-btn');
const mobileNav = document.querySelector('.navbar');
const speakersElm = document.getElementById('speakers');

navBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('show');
  if (mobileNav.classList.contains('show')) {
    navBtn.innerHTML = '<i style="font-size: 30px;" class="fa-solid fa-xmark fa-2x"></i>';
  } else {
    navBtn.innerHTML = '<i class="fa-solid fa-bars fa-2x"></i>';
  }
});

const speaker = [
  {
    speakerImg: 'image/speaker1.JPG',
    speakerName: 'Yochai Benkler',
    speakerJob: 'Berkman Professor of Enterpernieal legal studies at Harvard law School',
    speakerInfo: 'Benkler studies commans-based peer production, and published his seminal book the Wealth of Networks in 2006',
  },
  {
    speakerImg: 'image/speaker1.JPG',
    speakerName: 'Yochai Benkler',
    speakerJob: 'Berkman Professor of Enterpernieal legal studies at Harvard law School',
    speakerInfo: 'Benkler studies commans-based peer production, and published his seminal book the Wealth of Networks in 2006',
  },
  {
    speakerImg: 'image/speaker1.JPG',
    speakerName: 'Yochai Benkler',
    speakerJob: 'Berkman Professor of Enterpernieal legal studies at Harvard law School',
    speakerInfo: 'Benkler studies commans-based peer production, and published his seminal book the Wealth of Networks in 2006',
  },
  {
    speakerImg: 'image/speaker1.JPG',
    speakerName: 'Yochai Benkler',
    speakerJob: 'Berkman Professor of Enterpernieal legal studies at Harvard law School',
    speakerInfo: 'Benkler studies commans-based peer production, and published his seminal book the Wealth of Networks in 2006',
  },
  {
    speakerImg: 'image/speaker1.JPG',
    speakerName: 'Yochai Benkler',
    speakerJob: 'Berkman Professor of Enterpernieal legal studies at Harvard law School',
    speakerInfo: 'Benkler studies commans-based peer production, and published his seminal book the Wealth of Networks in 2006',
  },
  {
    speakerImg: 'image/speaker1.JPG',
    speakerName: 'Yochai Benkler',
    speakerJob: 'Berkman Professor of Enterpernieal legal studies at Harvard law School',
    speakerInfo: 'Benkler studies commans-based peer production, and published his seminal book the Wealth of Networks in 2006',
  },
];

function createSpeaker() {
  speakersElm.innerHTML = speaker.map((info) => `<div class="speaker">
        <img src=${info.speakerImg} alt="speaker image">
        <div>
            <h3>${info.speakerName}</h3>
            <i>${info.speakerJob}</i>
            <hr class="title-underline">
            <p>${info.speakerInfo}</p>
        </div>
      </div>`).join('');
}

createSpeaker();