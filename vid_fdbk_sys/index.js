const obs = document.querySelector('.obs');
const firefox = document.querySelector('.firefox');
const chromeBrowser = document.querySelector('.chrome');
const macbook = document.querySelector('.macbook');
const tv = document.querySelector('.tv');
const v8 = document.querySelector('.v8');
const recur = document.querySelector('.recur');
const webcam = document.querySelector('.webcam');
const equalizer = document.querySelector('.equalizer');
const vidCapture = document.querySelector('.vidcapture');

obs.addEventListener('mouseover', handleEvent);
firefox.addEventListener('mouseover', handleEvent);
chromeBrowser.addEventListener('mouseover', handleEvent);
macbook.addEventListener('mouseover', handleEvent);
tv.addEventListener('mouseover', handleEvent);
v8.addEventListener('mouseover', handleEvent);
recur.addEventListener('mouseover', handleEvent);
webcam.addEventListener('mouseover', handleEvent);
equalizer.addEventListener('mouseover', handleEvent);
vidCapture.addEventListener('mouseover', handleEvent);

function handleEvent(e) {
  console.log('mouseover', e);
}
