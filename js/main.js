let dice = {
  sides: 6,
  roll: function () {
  let randomNumber;
  // Write Code Here
  randomNumber = Math.floor(Math.random() * this.sides) + 1;
  
  // Generate a random number between 1 and the number of sides and assign it to randomNumber

   return (randomNumber);
  }
};


  function printNumber(number) {
  const numberToWord = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six'
  };

  let word = numberToWord[number];
  let diceImage = document.getElementById("dice-image");
  diceImage.src = `img/dice-six-faces-${word}.png`;
  diceImage.alt = `Dice shows ${number}`;
}

  


const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};
