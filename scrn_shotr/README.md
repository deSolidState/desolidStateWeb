# hacking a web-scraper to turn it into a glitch art app

## how the web-scraper works

- take a snapshot of container on website using puppeteer
- use jsdom to grab the container on the website
- use axios to help with the AJAX call

## what to add

- after snapshot replace old image with new snapshot
- then take a new snapshot
- lather, rinse, repeat
- each time, add very small, random amount of padding to each side
