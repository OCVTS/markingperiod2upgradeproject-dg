//Variables for my dice game    
    let player = "Player";
    let computer = "Computer";
  

    // Function to roll the dice, get a number then the image associated with that number
    function rollTheDice() {
        setTimeout(function () {
             randomNumber1 = Math.floor(Math.random() * 6) + 1;
             randomNumber3 = Math.floor(Math.random() * 6) + 1;

             randomNumber2 = Math.floor(Math.random() * 6) + 1;
             randomNumber4 = Math.floor(Math.random() * 6) + 1;

//the images that come with the random selected number, so if a 6 is pulled dice image 6 is displayed
            document.querySelector(".img1").setAttribute("src",
                "dice" + randomNumber1 + ".png");

            document.querySelector(".img2").setAttribute("src",
                "dice" + randomNumber2 + ".png");

                document.querySelector(".img3").setAttribute("src",
                    "dice" + randomNumber3 + ".png");

                    document.querySelector(".img4").setAttribute("src",
                        "dice" + randomNumber4 + ".png");

                        //statements declaring who won
            if (randomNumber1+randomNumber3 === randomNumber2+randomNumber4) {
                document.querySelector("h1").innerHTML = "Draw!";
            }

            else if (randomNumber1+randomNumber3 < randomNumber2+randomNumber4) {
                document.querySelector("h1").innerHTML
                                = (computer + " Wins!");

            }

            else {
                document.querySelector("h1").innerHTML
                                = (player + " Wins!");

            }
        }, 2500);
    }

