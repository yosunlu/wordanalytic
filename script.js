const textareaE1 = document.querySelector('.textarea');
const wordsNumberEl = document.querySelector('.stat__number--words');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');

const inputHandler = () => {
// example of input validation
    if (textareaE1.value.includes('<script>')){
        alert('You can\'t <script> in your text')
        textareaE1.value = textareaE1.value.replace('<script>', '')
    }
    // determin new numbers
    let numberOfWords = textareaE1.value.split(' ').length;
    if (textareaE1.value.length === 0) {
        numberOfWords = 0;
    }
    const numberOfCharacter = textareaE1.value.length;
    const twitterCharLeft = 280 - numberOfCharacter;
    const facebookCharLeft = 2200 - numberOfCharacter;

    // add visual indicator if limit is exceeded
    if (twitterCharLeft < 0) {
        twitterNumberEl.classList.add('stat__number--limit');
    } else {
        twitterNumberEl.classList.remove('stat__number--limit');
    }

    if (facebookCharLeft < 0) {
        facebookNumberEl.classList.add('stat__number--limit');
    } else {
        facebookNumberEl.classList.remove('stat__number--limit');
    }

    // set new numbers
    wordsNumberEl.textContent = numberOfWords;
    charactersNumberEl.textContent = numberOfCharacter;
    twitterNumberEl.textContent = twitterCharLeft;
    facebookNumberEl.textContent = facebookCharLeft
};

textareaE1.addEventListener('input', inputHandler)
