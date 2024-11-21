var quotesArray = [
  {
    author: "― Oscar Wilde",
    word: "“Be yourself; everyone else is already taken.”",
  },
  {
    author: "― Marilyn Monroe",
    word: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  },
  {
    author: "― Frank Zappa",
    word: "“So many books, so little time.”",
  },
  {
    author: "― Albert Einstein ",
    word: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  },
  {
    author: "― Marcus Tullius Cicero",
    word: "“A room without books is like a body without a soul.”",
  },
  {
    author: "― Bernard M. Baruch",
    word: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  },
  {
    author: "― William W. Purkey",
    word: "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
  },
  {
    author: "― Dr. Seuss",
    word: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  },
  {
    author: "― Mae West",
    word: "“You only live once, but if you do it right, once is enough.”",
  },
];

function showQuotes() {
  var lastQuoteNumber = null; // it help me to store the last quote number i have
  var quoteNumber = Math.floor(Math.random() * quotesArray.length);

  while (quoteNumber === lastQuoteNumber) {
    // it loop and check if the lastQuoteNumber and quoteNumber are equal and if they equal make randowm again
    quoteNumber = Math.floor(Math.random() * quotesArray.length);
  }

  //update the lastQuoteNumber so i can make the check again with the loop
  lastQuoteNumber = quoteNumber;

  // add the word and author name to the html code and make them appear
  document.getElementById(
    "quote"
  ).innerText = `${quotesArray[quoteNumber].word}`;
  document.getElementById(
    "authorName"
  ).innerText = `${quotesArray[quoteNumber].author}`;
}
