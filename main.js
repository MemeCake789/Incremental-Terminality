/*

    TODO:
    
    ■ develop upgrade sytem
        └ figure out how to check if intelengence is 5 and execute some code
    
    ■ find out how to print ascii art in 1 echo statement ( make a function if neccacary )

    ■ attempt to use a color libary so printing something dosent look so confusing

*/

var intelligence = 0;

$('#terminal').terminal({

    
    

    iam: function (name) {
        this.echo('Hello, ' + name +
            '. Welcome to GeeksForGeeks');
    },
    test: function () {
        this.echo("╔═════════════════════════════════╗")
        this.echo("╟ Unlocked upgrade : learn lvl 2  ╢")
        this.echo("╚═════════════════════════════════╝")

        this.echo("[[b;red;#0e0e0e]  red  ]")
        this.echo("[[b;orange;#0e0e0e]  orange  ]")
        this.echo("[[b;yellow;#0e0e0e]  yellow  ]")
        this.echo("[[b;green;#0e0e0e]  green  ]")
        this.echo("[[b;blue;#0e0e0e]  blue  ]")
        this.echo("[[b;purple;#0e0e0e]  purple  ]")
        this.echo("[[b;white;#0e0e0e]  white  ]")
    },

    learn: function() {
        var animationFrames = [
        
            // oh my goodness gracious thats alot of fortmating

            "learning: [[[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#003d09;#0e0e0e]■][[b;#003d09;#0e0e0e]■]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#003d09;#0e0e0e]■]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█]]",
            "learning: [[[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█][[b;#00ff26;#0e0e0e]█]]"
            
            
        ];

        var animationSpeed = 100; // Speed of animation in milliseconds

        var currentIndex = 0;

        this.disable(); // disables input line

        var animationInterval = setInterval(() => {
            var lastLineIndex = this.last_index(); // Get the index of the last line
            this.set_prompt(animationFrames[currentIndex]); // Replace the content of the current line
            currentIndex++;

            if (currentIndex === animationFrames.length) {
                clearInterval(animationInterval);
                intelligence++;
                this.echo(`Gained [[b;#11ff00;#0e0e0e]1] intelligence, total intelligence:[[b;#11ff00;#0e0e0e] ${intelligence}]`);
                this.set_prompt(">");
                this.enable();
                multiPrint(34,52,52,35,234)
                checkForUpgrades();

                
            }

            checkForLearnUpgrades = function(){
                if(intelligence > 5){
                    this.echo('Learn Lvl 2 upgrade');
                }
            }
            
        }, animationSpeed);


    },
    
    help: function () {
        this.echo(
        '[[b;#03fc03;#0e0e0e]learn] - learn how to code, gain some intelligence.\n'
        + '[[b;#03fc03;#0e0e0e]help] - view help commands');
    },

    onCommandNotFound: function(command) {
        // Scroll to the bottom of the terminal
        this.scrollToBottom();
      },
}, {
    greetings: greetings.innerHTML + "[[b;blue;#0e0e0e]Hello!] Welcome to my [[b;blue;#0e0e0e]incremental game!] \n    To start, type [[b;blue;#0e0e0e]help] on the command line\n"

});

 
function multiPrint(lines){
    var index = 0;
    for (let i = 0; i < lines.length; i++){
        this.echo(lines[index])
        index++
    }
}
$(function() {
    var frameInterval = 123.67; // 60 frames per second
  
    function gameLoop() {
        /*
        $('#terminal').terminal().echo(new $.terminal.FramesAnimation([
            [""]
        ], 8));
        */

      // Code to run every frame
       //$('#terminal').terminal().echo('Running game loop...'); <- try to avoid echoing statments to the game loop
      // Call the game loop again for the next frame


      // UPGRADE CHECKS


      setTimeout(gameLoop, frameInterval);
    }
    
    function tips(){
        var tips = [
            "[[b;#004f15;#deffe7] Tip ■ use the up ( ▲ ) or down ( ▼ ) keys to view your message history. ]"
        ]

        $('#terminal').terminal().echo(tips[0]);

        setTimeout(tips,100)
    }
    // Start the game loop
    tips();
    
  });
  