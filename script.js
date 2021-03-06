// djlowes Hangman //

// Array of answers for each category

var books = ["Don Quixote", "In Search Of Lost Time", "Ulysses", "The Odyssey", "War and Peace", "Moby Dick", "The Divine Comedy", "Hamlet", "The Adventures of Huckleberry Finn", "The Great Gatsby", "The Iliad", "One Hundred Years of Solitude", "Madame Bovary", "Crime and Punishment", "The Brothers Karamazov", "Pride and Prejudice", "Wuthering Heights", "The Sound and the Fury", "Lolita", "Nineteen Eighty Four", "Alice's Adventures in Wonderland", "Great Expectations", "Anna Karenina", "The Catcher", "Middlemarch", "Gulliver's Travels", "The Aeneid", "Heart of Darkness", "One Thousand and One Nights", "The Canterbury Tales", "The Stranger", " The Stories of Anton Chekhov", "The Grapes of Wrath", "The Red and the Black", "The Trial", "Leaves of Grass", "Absalom, Absalom", "Oedipus the King", "Candide", "The Quran", "The Republic", "The Bible", "Gulliver's Travels", "The Wealth of Nations", "Invisible Man", "Falconer", "Lord of the Flies", "The Lion, The Witch and the Wardrobe", "The Lord of the Rings", "Things Fall Apart", "To Kill a Mockingbird", "Tropic of Cancer", "A Clockwork Orange", "Animal Farm", "Blood Meridian", "Beloved", "All the King’s Men", "Gone With the Wind", "One Flew Over the Cuckoo’s Nest"];
var movieSayings = ["Frankly, my dear, I don't give a damn", "Here's looking at you, kid", "You're gonna need a bigger boat", "May the force be with you", "Toto, I have a feeling we are not in Kansas anymore", "You talkin' to me?", "There's no place like home", "The first rule of fight club is you do not talk about fight club", "I am your father", "Bond. James Bond", "I see dead people", "I'll be back", "You can't handle the truth!", "E.T phone home", "To infinity and beyond!", "Houston, we have a problem", "Show me the money!", "Say hello to my little friend", "I love the smell of napalm in the morning", "The greatest trick the devil ever pulled was convincing the world he didn't exist", "Keep your friends close, but your enemies closer", "Shaken, not stirred", "If you build it, he will come", "Hasta la vista, baby", "Go ahead, make my day", "My precious", "Good morning, Vietnam!", "Elementary, my dear Watson", "Wax on, wax off", "They may take our lives, but they will never take our freedom!"];
var songs = ["Smells Like Teen Spirit", "Imagine", "One", "Billie Jean" ,"Bohemian Rhapsody", "Hey Jude", "Like A Rolling Stone", "I Cant Get No Satisfaction", "God Save The Queen", "London Calling", "Hotel California", "Stairway To Heaven", "The Twist", "Live Forever", "Life On Mars?", "Heartbreak Hotel", "Over The Rainbow", "Born To Run", "Creep", "Respect", "Dancing Queen", "Good Vibrations", "Purple Haze", "Yesterday", "No Woman No Cry", "Hallelujah", "Stand By Me", "When Doves Cry", "River Deep Mountain High"];
var quotes = ["That which does not kill us makes us stronger.", "In the middle of every difficulty lies opportunity.", "You must be the change you wish to see in the world.", "If you want something done right, do it yourself.", "The unexamined life is not worth living.", "Better to have loved and lost, than to have never loved at all.", "An eye for an eye leaves the whole world blind.", "Necessity is the mother of invention.", "Give a man a fish and you feed him for a day, teach a man to fish and you feed him for a lifetime.", "With great power comes great responsibility.", "The pen is mightier than the sword.", "It is always darkest just before the dawn.", "If you are going through hell, keep going.", "A penny saved is a penny earned.", "Ignorance is bliss.", "Fortune favours the bold.", "I think therefore I am.", "Hell has no fury like a woman scorned.", "When the going gets tough, the tough get going.", "Nothing is certain except for death and taxes."];



// Displays play page

function startG(){
    document.getElementById('homePage').style.display = "none";
    document.getElementById('categoryPage').style.display = "block";
}



// Randomly selects phrase from array in each category on play page

function bookTitles(){
    alert("Please use your keyboard to play")
    r = Math.floor(Math.random()*books.length);
    phrase = books[r];
      console.log(phrase);
    document.getElementById('categoryPage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "What's the name of this famous book?";
    hangman();
}
function movies(){
    alert("Please use your keyboard to play")
    r = Math.floor(Math.random()*movieSayings.length);
    phrase = movieSayings[r];
      console.log(phrase);
    document.getElementById('categoryPage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "What is this famous movie quote?";
    hangman();
}
function hitSong(){
    alert("Please use your keyboard to play")
    r = Math.floor(Math.random()*songs.length);
    phrase = songs[r];
      console.log(phrase);
    document.getElementById('categoryPage').style.display = "none";
    document.getElementById('categoryName').innerHTML = "What's this famous song title?";
    hangman();
}
function famousQuote(){
  alert("Please use your keyboard to play")
  r = Math.floor(Math.random()*quotes.length);
  phrase = quotes[r];
    console.log(phrase);
  document.getElementById('categoryPage').style.display = "none";
  document.getElementById('categoryName').innerHTML = "What is this famous quote?";
  hangman();
}



// Draws the lines of the hidden phrase to start guessing - initiates the game

var fillLength = 0;
var characters = 0;

function hangman(){
  var spaces = 0;
  var x = phrase.length;
  var y = x-1;
    while (x>0){
        characters++;
        var letter = phrase.substring(y,x);
        if(letter === " "){
            document.getElementById('letter'+x).innerHTML = "&nbsp;";
            document.getElementById('letter'+x).style.visibility = "hidden";
            document.getElementById('letter'+x).style.display = "block";
            document.getElementById('underline'+x).style.display = "block";
            spaces++;
        }
        else if(letter === "?" || letter === "!" || letter === "," || letter === "." || letter === "-" || letter === "'"){
            document.getElementById('letter'+x).innerHTML = letter;
            document.getElementById('letter'+x).style.display = "block";
            document.getElementById('underline'+x).style.display = "block";
            spaces++;
        }
        else{
            document.getElementById('letter'+x).innerHTML = letter;
            document.getElementById('letter'+x).style.visibility = "hidden";
            document.getElementById('underline'+x).style.display = "block";
            document.getElementById('underline'+x).style.borderBottom = "1px solid black";
        }
        x--;
        y--;
    }
    fillLength = phrase.length - spaces;
    document.getElementById('playPage').style.display = "block";
}



// Displays hangman canvass as starting point (stole from a github user)

function draw(){
    var ctx = document.getElementById("hangman").getContext('2d');
        ctx.fillStyle = "white";
        ctx.lineWidth=3;
        ctx.fillRect(0, 0, 300, 300);
        ctx.beginPath(); //vertical bar
            ctx.moveTo(50,270);
            ctx.lineTo(50,25);
            ctx.stroke();
        ctx.beginPath(); //vertical bar long piece
            ctx.moveTo(65,270);
            ctx.lineTo(65,85);
            ctx.stroke();
        ctx.beginPath(); //vertical bar short piece
            ctx.moveTo(65,64);
            ctx.lineTo(65,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar
            ctx.moveTo(49,25);
            ctx.lineTo(175,25);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar short piece
            ctx.moveTo(49,40);
            ctx.lineTo(86,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar long piece
            ctx.moveTo(106,40);
            ctx.lineTo(175,40);
            ctx.stroke();
        ctx.beginPath(); //small vertical bar
            ctx.moveTo(173,25);
            ctx.lineTo(173,40);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(100,25);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(60,90);
            ctx.lineTo(111,35);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(60,90);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(100,25);
            ctx.lineTo(111,35);
            ctx.stroke();
        ctx.beginPath(); //ground
            ctx.moveTo(35,270);
            ctx.lineTo(265,270);
            ctx.stroke();
        ctx.beginPath(); //noose
            ctx.moveTo(150,40);
            ctx.lineTo(150,80);
            ctx.stroke();
}


// Guessing

//Issue 1. When you enter the same key twice (correct guess) it counts as numRight so it will fires win() on events where not all letters have been guessed
//Issue 2. When you enter the same key twice (incorrect guess) it counts as numWrong and hang() will continue to fire
//Issue 3. guessLetter still works after win() - it should stop

var numWrong = 0;
var numRight = 0;
var letterDisplay = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

document.onkeyup = function guessLetter() {
  var results = document.getElementById('results');
  var ul1 = document.getElementById('underline1').offsetWidth;
  var correct = 0;
  var userGuess = event.key;
  if (letterDisplay.indexOf(event.key) === -1) {
    return;
  }
  for (let a = 1; a < 101; a++) {
    for(let g = 0; g < letterDisplay.length; g++) {
      var top = document.getElementById('letter'+a);
    if (userGuess === letterDisplay[g] && userGuess === top.innerHTML.toLowerCase()) {
      top.style.visibility = "visible";
      document.getElementById(letterDisplay[g]).style.visibility = 'visible';
      correct++;
      numRight++;
    } else if (userGuess === letterDisplay[g] && userGuess != top.innerHTML.toLowerCase()) {
        document.getElementById(letterDisplay[g]).style.visibility = 'visible';
    }
  }
}
if(correct==0) {
    numWrong++;
    hang();
  }

console.log('incorrect guess: ' + numWrong)
document.getElementById('guessesIncorrect').innerHTML = numWrong;


if(numWrong==6) {
    results.style.visibility = "visible";
    results.style.color = "white";
    results.innerHTML = "<b>You can't miss another letter!</b>";
    results.style.fontSize = "24px";
    }
    if(numWrong==7){
      results.innerHTML = '<b>You lose!</b><br />If you want, you can keep guessing until you get it right.';
      document.getElementById('home').style.display = "block";
    }
    if(numRight==fillLength){
      win();
    }
};



// Winning

function win(){
    var ul1 = document.getElementById('underline1').offsetWidth;
    var results = document.getElementById('results');
        results.style.visibility = "visible";
        results.style.color = "#228B22";
        results.style.fontSize = "40px";
    if(numWrong > 6){
        results.innerHTML = "It's about time you figured it out...";
        document.getElementById('letterBank').style.display = "none";
        document.getElementById('home').style.display = "block";
        }
    else{
        results.innerHTML = "You win!";
        document.getElementById('letterBank').style.display = "none";
        document.getElementById('home').style.display = "block";
        results.style.fontSize = "40px";
    }
}



// Draws hangman when guesses are wrong (stole from a github account)

function hang(){
    var ctx = document.getElementById("hangman").getContext('2d');
    if(numWrong==1){
        ctx.beginPath(); //head
            ctx.arc(150, 100, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 95, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 95, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //mouth
            ctx.arc(150, 103, 9, 0, Math.PI);
            ctx.stroke();
    }
    if(numWrong==2){
        ctx.beginPath(); //body
            ctx.moveTo(150,120);
            ctx.lineTo(150,190);
            ctx.stroke();
    }
    if(numWrong==3){
        ctx.fillStyle = "white";
        ctx.fillRect(138, 102, 24, 12); //cover mouth
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,108);
            ctx.lineTo(160,108);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(150,135);
            ctx.lineTo(180,160);
            ctx.stroke();
    }
    if(numWrong==4){
        ctx.beginPath(); //left arm
            ctx.moveTo(150,135);
            ctx.lineTo(120,160);
            ctx.stroke();
    }
    if(numWrong==5){
        ctx.fillRect(138, 102, 24, 12); //cover mouth
        ctx.beginPath(); //sad mouth
            ctx.arc(150, 112, 9, 0, Math.PI, true);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,188);
            ctx.lineTo(180,230);
            ctx.stroke();
    }
    if(numWrong==6){
        ctx.beginPath(); //left leg
            ctx.moveTo(151,188);
            ctx.lineTo(120,230);
            ctx.stroke();
    }
    if(numWrong==7){
        ctx.fillRect(138, 90, 24, 24); //cover face
        ctx.fillRect(118, 121.2, 70, 120); //cover body
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,108);
            ctx.lineTo(160,108);
            ctx.stroke();
        ctx.beginPath(); //body
            ctx.moveTo(150,135);
            ctx.lineTo(150,205);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(150,150);
            ctx.lineTo(180,175);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(150,150);
            ctx.lineTo(120,175);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,203);
            ctx.lineTo(180,245);
            ctx.stroke();
        ctx.beginPath(); //left leg
            ctx.moveTo(151,203);
            ctx.lineTo(120,245);
            ctx.stroke();
        ctx.lineWidth=2;
        ctx.beginPath(); //left eye
            ctx.moveTo(140,93);
            ctx.lineTo(146,98);
            ctx.stroke();
            ctx.moveTo(140,98);
            ctx.lineTo(146,93);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.moveTo(154,98);
            ctx.lineTo(160,93);
            ctx.stroke();
            ctx.moveTo(154,93);
            ctx.lineTo(160,98);
            ctx.stroke();
    }
    if(numWrong==8){
        ctx.fillRect(118, 135, 70, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(150,150);
            ctx.lineTo(150,220);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(150,165);
            ctx.lineTo(180,180);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(150,165);
            ctx.lineTo(120,180);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,218);
            ctx.lineTo(180,260);
            ctx.stroke();
        ctx.beginPath(); //left leg
            ctx.moveTo(151,218);
            ctx.lineTo(120,260);
            ctx.stroke();
    }
    if(numWrong==9){
        ctx.fillRect(118, 143, 70, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(150,165);
            ctx.lineTo(150,235);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(150,180);
            ctx.lineTo(180,195);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(150,180);
            ctx.lineTo(120,195);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,232);
            ctx.lineTo(180,270);
            ctx.stroke();
        ctx.beginPath(); //left leg
            ctx.moveTo(151,232);
            ctx.lineTo(120,270);
            ctx.stroke();
    }
    if(numWrong==10){
        ctx.fillRect(118, 148, 70, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(150,180);
            ctx.lineTo(150,250);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(150,195);
            ctx.lineTo(180,210);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(150,195);
            ctx.lineTo(120,210);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,247);
            ctx.lineTo(200,270);
            ctx.stroke();
        ctx.beginPath(); //left leg
            ctx.moveTo(151,247);
            ctx.lineTo(100,270);
            ctx.stroke();
    }
    if(numWrong==11){
        ctx.fillRect(90, 148, 120, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(200,195);
            ctx.lineTo(150,268);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(191,210);
            ctx.lineTo(220,245);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(191,210);
            ctx.lineTo(145,237);
            ctx.stroke();
        ctx.beginPath(); //right leg
            ctx.moveTo(149,268);
            ctx.lineTo(210,268);
            ctx.stroke();
        ctx.beginPath(); //left leg
            ctx.moveTo(151,268);
            ctx.lineTo(90,268);
            ctx.stroke();
    }
    if(numWrong==12){
        ctx.fillRect(90, 145, 140, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(230,220);
            ctx.lineTo(150,268);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(212,230);
            ctx.lineTo(240,255);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(212,230);
            ctx.lineTo(165,237);
            ctx.stroke();
    }
    if(numWrong==13){
        ctx.fillRect(90, 145, 160, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(245,255);
            ctx.lineTo(150,268);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(225,255);
            ctx.lineTo(255,268);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(225,255);
            ctx.lineTo(185,250);
            ctx.stroke();
    }
    if(numWrong==14){
        ctx.fillRect(90, 145, 160, 120); //cover body
        ctx.lineWidth=3;
        ctx.beginPath(); //body
            ctx.moveTo(245,264);
            ctx.lineTo(150,268);
            ctx.stroke();
        ctx.beginPath(); //right arm
            ctx.moveTo(225,268);
            ctx.lineTo(255,268);
            ctx.stroke();
        ctx.beginPath(); //left arm
            ctx.moveTo(225,264);
            ctx.lineTo(185,264);
            ctx.stroke();
        ctx.fillRect(138, 90, 24, 24); //cover face
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,108);
            ctx.lineTo(160,108);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 95, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 95, 3.5, 0, 2*Math.PI);
            ctx.stroke();
    }
    if(numWrong==15){
        ctx.fillRect(138, 102, 24, 12); //cover mouth
        ctx.beginPath(); //mouth
            ctx.arc(150, 103, 9, 0, Math.PI);
            ctx.stroke();
    }
    if(numWrong==16){
        ctx.fillRect(128, 78, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 120, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 115, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 115, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //mouth
            ctx.arc(150, 123, 9, 0, Math.PI);
            ctx.stroke();
    }
    if(numWrong==17){
        ctx.fillRect(128, 98, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 140, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 135, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 135, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //mouth
            ctx.arc(150, 143, 9, 0, Math.PI);
            ctx.stroke();
    }
    if(numWrong==17){
        ctx.fillRect(128, 118, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 160, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 155, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 155, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,168);
            ctx.lineTo(160,168);
            ctx.stroke();
    }
    if(numWrong==18){
        ctx.fillRect(128, 138, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 180, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 175, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 175, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,188);
            ctx.lineTo(160,188);
            ctx.stroke();
    }
    if(numWrong==19){
        ctx.fillRect(128, 158, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 200, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 195, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 195, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //sad mouth
            ctx.arc(150, 213, 9, 0, Math.PI, true);
            ctx.stroke();
    }
    if(numWrong==20){
        ctx.fillRect(128, 178, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 220, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 215, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 215, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //sad mouth
            ctx.arc(150, 233, 9, 0, Math.PI, true);
            ctx.stroke();
    }
    if(numWrong==21){
        ctx.fillRect(128, 198, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 240, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.arc(143, 235, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.arc(157, 235, 3.5, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //sad mouth
            ctx.arc(150, 253, 9, 0, Math.PI, true);
            ctx.stroke();
    }
    if(numWrong==22){
        ctx.fillRect(128, 218, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(150, 243, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.moveTo(140,234);
            ctx.lineTo(146,239);
            ctx.stroke();
            ctx.moveTo(140,239);
            ctx.lineTo(146,234);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.moveTo(154,234);
            ctx.lineTo(160,239);
            ctx.stroke();
            ctx.moveTo(154,239);
            ctx.lineTo(160,234);
            ctx.stroke();
        ctx.beginPath(); //straight mouth
            ctx.moveTo(140,250);
            ctx.lineTo(160,250);
            ctx.stroke();
    }
    if(numWrong==23){
        ctx.fillRect(128, 220, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(129, 246, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.moveTo(115,245);
            ctx.lineTo(121,250);
            ctx.stroke();
            ctx.moveTo(115,250);
            ctx.lineTo(121,245);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.moveTo(120,234);
            ctx.lineTo(126,239);
            ctx.stroke();
            ctx.moveTo(120,239);
            ctx.lineTo(126,234);
            ctx.stroke();
        ctx.beginPath(); //straight mouth
            ctx.moveTo(129,257);
            ctx.lineTo(138,240);
            ctx.stroke();
    }
    if(numWrong==24){
        ctx.fillRect(106, 218, 45, 45); //cover head
        ctx.fillRect(120, 261, 25, 5); //cover rest of head
        ctx.beginPath(); //head
            ctx.arc(108, 247, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.moveTo(105,257);
            ctx.lineTo(111,262);
            ctx.stroke();
            ctx.moveTo(105,262);
            ctx.lineTo(111,257);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.moveTo(94,248);
            ctx.lineTo(100,253);
            ctx.stroke();
            ctx.moveTo(94,253);
            ctx.lineTo(100,248);
            ctx.stroke();
        ctx.beginPath(); //straight mouth
            ctx.moveTo(121,248);
            ctx.lineTo(101,235);
            ctx.stroke();
    }
    if(numWrong==25){
        ctx.fillRect(86, 220, 45, 45); //cover head
        ctx.beginPath(); //head
            ctx.arc(87, 248, 20, 0, 2*Math.PI);
            ctx.stroke();
        ctx.beginPath(); //left eye
            ctx.moveTo(78,250);
            ctx.lineTo(84,256);
            ctx.stroke();
            ctx.moveTo(78,256);
            ctx.lineTo(84,250);
            ctx.stroke();
        ctx.beginPath(); //right eye
            ctx.moveTo(91,250);
            ctx.lineTo(97,256);
            ctx.stroke();
            ctx.moveTo(91,256);
            ctx.lineTo(97,250);
            ctx.stroke();
        ctx.beginPath(); //straight mouth
            ctx.moveTo(77,240);
            ctx.lineTo(97,240);
            ctx.stroke();
    }
}
