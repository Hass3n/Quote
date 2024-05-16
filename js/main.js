

/**random===================== */

var quotes = [
  {
    content: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`
    , publish: '― Bernard M. Baruch'
  },
  {
    content: `“You've gotta dance like there's nobody watching,
  Love like you'll never be hurt,
  Sing like there's nobody listening,
  And live like it's heaven on earth.”`, publish: '― William W. Purkey'
  },
  {
    content: `“You only live once, but if you do it right, once is enough.”`,
    publish: '― Mae West'
  },
  { content: `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”`, publish: '― C.S. Lewis, The Four Loves' },
  { content: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`, publish: '― J.K. Rowling, Harry Potter and the Goblet of Fire' },
  { content: `“A friend is someone who knows all about you and still loves you.”`, publish: '― Elbert Hubbard' },
  { content: `“To live is the rarest thing in the world. Most people exist, that is all.”`, publish: '― Oscar Wilde' },
];



var btn = document.getElementById('BtnRandom');

var textContent = document.getElementById('text_content');
var textTitke = document.getElementById('text_title');


/**function get number random */

function getRandomText() {
  rnum = Math.floor(Math.random() * 7);
  return quotes[rnum];
}


/*get random text */
function randomizetext() {
  var curContenttext = document.getElementById("text_content").innerHTML;
  var curTitletext = document.getElementById("text_title").innerHTML;

  var randomText = getRandomText();
  console.log(randomText);
  while (randomText.contentt == curContenttext &&randomText.publish== curTitletext) {
    randomText = getRandomText();
  }
  document.getElementById("text_content").innerHTML = randomText.content;
  document.getElementById('text_title').innerHTML=randomText.publish;
}



btn.onclick = function () {

  randomizetext();

}


