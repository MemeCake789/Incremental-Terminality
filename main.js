var points = 0;

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
            "[000000000]","[X00000000]","[XX0000000]","[XXX000000]","[XXXX00000]",""
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
                points++;
                this.echo(`Added [[b;#11ff00;#0e0e0e]1] point, total points:[[b;#11ff00;#0e0e0e] ${points}]`);
                this.set_prompt(">");
                this.enable(); // enables input line
            }
        }, animationSpeed);
    },

    help: function () {
        this.echo(
        '[[b;#03fc03;#0e0e0e]learn] - learn how to code, gain some points.\n'
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
      // Code to run every frame
       //$('#terminal').terminal().echo('Running game loop...'); <- try to avoid echoing statments to the game loop
      // Call the game loop again for the next frame


      // UPGRADE CHECKS

      if (points > 5){
        $('#terminal').terminal().echo('got 5 points!');
      }
      setTimeout(gameLoop, frameInterval);
    }
  
    // Start the game loop
    gameLoop();
  });
  