const navbarsBtn = document.querySelector('.navbars');
const navxmarkBtn = document.querySelector('.navxmark')
const mobileNav = document.querySelector('.navbar');
const speakersElm = document.getElementById('speakers');

navbarsBtn.addEventListener('click', () => {
  mobileNav.classList.add('show');
});

navxmarkBtn.addEventListener("click", () =>{
  mobileNav.classList.remove('show');
})

const speaker = [
  {
    speakerImg: 'image/speaker1.jpg',
    speakerName: 'Esmatullah Qadeemi',
    speakerJob: 'Marketing Coordinator - Develop and execute marketing campaigns.',
    speakerInfo: 'Marketing Coordinator - Responsible for developing and executing marketing campaigns to promote the company.',
  },
  {
    speakerImg: 'image/speaker2.jpg',
    speakerName: 'Hekmatullah Dawran',
    speakerJob: 'Human Resources Generalist - Oversee recruitment.',
    speakerInfo: 'Human Resources Generalist - Oversees recruitment and employee relations, administers employee benefits.',
  },
  {
    speakerImg: 'image/speaker3.jpg',
    speakerName: 'Ebrahim Ebrahimi',
    speakerJob: 'Software Developer - Design and develop software applications.',
    speakerInfo: 'Software Developer - Designs and develops software applications, tests and debugs code, and collaborates with team',
  },
  {
    speakerImg: 'image/speaker4.jpg',
    speakerName: 'Misbahullah Naizai',
    speakerJob: 'Operations Manager - Supervise and manage daily operations.',
    speakerInfo: 'Operations Manager - Supervises and manages daily operations, develops operational strategies, and manages budgets.',
  },
  {
    speakerImg: 'image/speaker5.jpg',
    speakerName: 'Jalal Zalal',
    speakerJob: 'Customer Service Representative - Provide support and assistance to customers.',
    speakerInfo: 'Customer Service Representative - Provides support and assistance to customers, and resolves issues and complaints.',
  },
  {
    speakerImg: 'image/speaker6.jpg',
    speakerName: 'Emad Ebrahimi',
    speakerJob: 'Berkman Professor of Enterpernieal legal studies at Harvard law School',
    speakerInfo: 'Benkler studies commans-based peer production, and published his seminal book the Wealth of Networks.',
  },
];

function createSpeaker() {
  speakersElm.innerHTML = speaker.map((info) => `<article class="speaker">
        <img src=${info.speakerImg} alt="speaker image">
        <div>
            <h3>${info.speakerName}</h3>
            <i>${info.speakerJob}</i>
            <hr class="title-underline">
            <p>${info.speakerInfo}</p>
        </div>
      </article>`).join('');
}

window.onload = function() {
  createSpeaker();
};