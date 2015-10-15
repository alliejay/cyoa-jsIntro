// FIRST DAY AT SOUTH PARK ELEMENTARY

// VARIABLES

var cartmanScore = 0;

var score = 0;

var battling = true;


// GAME

console.log(" ");

console.log("FRIENDLY FACES EVERYWHERE, HUMBLE FOLKS WITHOUT TEMPTATION!");

var userName = prompt("Mr. Mackey: Kids, we have a new student joining us, mmmkay? Uh what is your name again?");

console.log("Mr. Mackey: Mmmkay, " + userName + ", have a seat. Everyone wait for Mr. Garrison, he's running late.  Be kind to " + userName + " now, mmmkay?");

var ready = confirm("Cartman: Hey new kid! Hey " + userName + "! I bet you can't beat me. Best out of three wins. Ready?");

if(ready) {
  var challenge = prompt("Stan: Cartman's all talk, man, don't be scared. Do you want to race or fight?").toLowerCase();
  while(battling) {
    if(challenge === "race") {  // ********** RACE **********
      console.log("Cartman: Bring it on. I've got my secret weapon... hope you've got yours.");
      var secretWeapon = prompt("Kyle: I don't what he's talking about, dude.  You can borrow my running shoes if you want.\n\nButters: UhhHhHh you can borrow my sweater if you want!!\n\nDo you want the shoes or the sweater?").toLowerCase();
          if (secretWeapon === "shoes") {
            console.log("Cartman: 3, 2, 1.. GO! **excessive panting** ....no way, you cheated!");
            score++;
            console.log("Kyle: Nice, you won the race! Your score is " + score + " and Cartman's is " + cartmanScore + ".");
              if (score === 2) {
                console.log("Stan: You beat Cartman! Way to go!!");
                battling = false;
              } else {
                console.log("Cartman: Okay " + userName + " now it's time to FIGHT!");
                challenge = "fight";
              }
          } else if (secretWeapon === "sweater") {
            console.log("Cartman: 3, 2, 1.. GO! HA! I win!! Why would you pick a sweater?! HAHA!!");
            cartmanScore++;
            console.log("Stan: Bad choice, man. Cartman's score is " + cartmanScore + " and yours is " + score + ".");
              if (score === 1) {
                console.log("Cartman: Oh crap, Mr. Garrison is coming.  I'll see you on the playground after school to finish this!");
                battling = false;
              } else {
                console.log("Cartman: Okay " + userName + " now it's time to FIGHT!");
                challenge = "fight";
              }
          } else {
            console.log("Kyle: Huh? Can't help you with that... I guess you forfeit.");
            battling = false;
          }                 // ********** END RACE **********
    } else if (challenge === "fight") { // ********** FIGHT **********
      console.log("Cartman: Ha! You don't stand a chance. Alright, listen, I'll let you use one weapon.  Choose wisely, " + userName + ".");
      var weapon = prompt("Stan: Weapons?! This is getting out of hand.  I guess you could borrow my billy club...\n\nButters: UhhHhhHh HEY I've got some throwing stars!!\n\nDo you want the billy club or the throwing stars?").toLowerCase();
        if (weapon === "billy club") {
          console.log("Cartman: Alright, alright, I take it back - I don't want to fight. You win this one.");
          score++;
          console.log("Kyle: Nice dude! Your score is " + score + " and Cartman's is " + cartmanScore + ".");
            if (score === 2) {
              console.log("Stan: You beat Cartman! Way to go!!");
              battling = false;
            } else if (cartmanScore === 1) {
              console.log("Cartman: Oh crap, Mr. Garrison is coming.  I'll see you on the playground after school to finish this!");
              battling = false;
            } else {
              console.log("Cartman: Okay " + userName + " now it's time to RACE!");
              challenge = "race";
            }
        } else if (weapon === "throwing stars") {
          console.log("Cartman: Oh yeah?!! Let's go! I can dodge & weave.");
          console.log("Stan: Dude!! Can't you aim?!! Why'd you pick throwing stars?!!");
          console.log("Kyle: You killed Kenny!! You bastard!! This game is OVER, let's get out of here before Mr. Garrison comes, " + userName + "'s nuts!");
          battling = false;
        } else {
          console.log("Stan: That wasn't an offer... I guess you forfeit.");
          battling = false;
        }                             // ********** END FIGHT **********
  } else {
    console.log("Kyle: Dude, lame! You're just gonna let Cartman walk all over you like that?! I guess you forfeit.");
    battling = false;
  }
 }
}
