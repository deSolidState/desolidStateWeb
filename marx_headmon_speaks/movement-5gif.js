'use strict';

const imgURLs = [
  './gifs/meat-world-mh.gif',
  './gifs/fetish-addiction-mh.gif',
  './gifs/flesh-of-desire-mh.gif',
  './gifs/not-busted-for-plagiarism-mh.gif',
  './gifs/let-meat-die-mh.gif'
];

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const bib = document.getElementById('bib');

// window.addEventListener('mousedown', hideImgs);
// window.addEventListener('mouseup', showImgs);

function chgImg1() {
  img1.src = imgURLs[getRand(0, (imgURLs.length - 1))];
  let intvl = getRand(5000, 25000);
  setTimeout(chgImg1, intvl);
}
setTimeout(chgImg1, 1000);

function chgImg2() {
  img2.src = imgURLs[getRand(0, (imgURLs.length - 1))];
  let intvl = getRand(5000, 25000);
  setTimeout(chgImg2, intvl);
}
setTimeout(chgImg2, 1000);

function chgImg3() {
  img3.src = imgURLs[getRand(0, (imgURLs.length - 1))];
  let intvl = getRand(5000, 25000);
  setTimeout(chgImg3, intvl);
}
setTimeout(chgImg3, 1000);

function chgImg4() {
  img4.src = imgURLs[getRand(0, (imgURLs.length - 1))];
  let intvl = getRand(5000, 25000);
  setTimeout(chgImg4, intvl);
}
setTimeout(chgImg4, 1000);

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hideImgs() {
  img1.style.visibility='hidden';
  img2.style.visibility='hidden';
  img3.style.visibility='hidden';
  img4.style.visibility='hidden';
  showBib();
}

function showImgs() {
  setTimeout(function() {
    img1.style.visibility='visible';
    img2.style.visibility='visible';
    img3.style.visibility='visible';
    img4.style.visibility='visible';
    hideBib();
  }, 2500);
}

function showBib() {
  bib.style.visibility='visible';
  bib.classList.add('to-top');
}

function hideBib() {
  bib.style.visibility='hidden';
  bib.classList.remove('to-top');
}