  let phrases = [
  { text: 'искупаться в Атыше!', image: 'https://utv.ru/media/uploads/2018/07/13/mxkzvj.png' },
  { text: 'подняться на Иремель!', image: 'https://www.uralla.ru/wp-content/uploads/2013/12/DSC4210.jpg' },
  { text: 'поплавать в Нугуше!', image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Nugush_River_in_Meleuzovsky_District.jpg' },
  { text: 'увидеть Инзерские Зубчатки!', image: 'https://nomadsclub.ru/uploads/posts/2018-06/1528957834_i3.jpg' },
  { text: 'постоять на краю скалы Мамбет!', image: 'https://forum.zr.ru/forum/uploads/gallery/album_339/gallery_43914_339_3839352.jpg' },
  { text: 'посмотреть на малый Ямантау!', image: 'https://sun2.ufanet.userapi.com/J4cbQtoOCWruTmGnnt9Jvr_-W9OPtaVTaPURng/IAW43-SJrvA.jpg' },
  { text: 'наслаждаться видом на Зубья Шурале!', image: 'https://nomadsclub.ru/uploads/posts/2018-06/1530181226_vjdzshdhtaa.jpg' },
  { text: 'искупаться в горной речке!', image: 'https://sun9-37.userapi.com/LN8-_PM2M6X7Omy7qKyTBBPvCXxu1TdrbQ1jsA/_7HKcsjF0BM.jpg' },
  { text: 'наслаждаться видом на Зубьях Шурале!', image: 'https://nomadsclub.ru/uploads/posts/2018-06/1530181226_vjdzshdhtaa.jpg' },

];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, 'textContent', phrases[i].text);
  smoothly(image, 'src', phrases[i].image)
}
