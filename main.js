var intelligence = 0;

$('#terminal').terminal({

    

    iam: function (name) {
        this.echo('Hello, ' + name +
            '. Welcome to GeeksForGeeks');
    },
    test: function () {
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
                this.enable(); // enables input line
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

      if (intelligence > 5){
        $('#terminal').terminal().echo('got 5 intelligence!');
      }
      setTimeout(gameLoop, frameInterval);
    }
  
    // Start the game loop
    gameLoop();
  });
  