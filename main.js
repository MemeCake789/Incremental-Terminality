/*

    TODO:
    
    ■ develop upgrade sytem DONE
        └ figure out how to check if intelengence is 5 and execute some code
    
    ■ find out how to print ascii art in 1 echo statement ( make a function if neccacary )

    ■ attempt to use a color libary so printing something dosent look so confusing DONE

*/

var intelligence = 0;
var upgrades = [
    ["▌ Learn Level 2 ▌", "Improves learning methods. ▌", "Needs: 5 intelligence ▌", "Buy Code: [2VWA] ▌"]
]


$('#terminal').terminal({
    askName: function() {
        var term = this;
        term.read('What is your name? ').then(function(name) {
            term.echo('Hello, ' + name + '!');
        });
    },

    upgrades: function() {
        function echoStyledMessage(message, tag, className) { 
        
            var echoStyledMessage = $(`<${tag} class="${className}">${message}</${tag}>`);
            $('#terminal').terminal().echo(echoStyledMessage);
        
        }
        
        function promptStyledMessage(format,color,background_color,message){

            var promptStyledMessage = `[[${format};${color};${background_color}]${message}]`;
            $('#terminal').terminal().set_prompt(() => promptStyledMessage);

        }
        
        for (var i = 0; i < upgrades.length; i++) {
            echoStyledMessage(upgrades[i].join(' '),"p","test"); // shows all messages
        }

        
        this.read('Enter a buy code to purchase (case sensitive): ').then((code)=>{
            if (code === "2VWA"){
                this.echo("ok");
            } else{
                echoStyledMessage("Cannot find that product!","p","test")
            }
        });
    },

    iam: function (name) {
        this.echo('Hello, ' + name +
            '. Welcome to GeeksForGeeks');
    },
    test: function () {
        /*
        function printStyledMessage(message, tag, className) { // type = 1- echo|type = 2- set prompt
            var styledMessage = $(`<${tag} class="${className}">${message}</${tag}>`);
            if ( type === 1 ){
                $('#terminal').terminal().echo(styledMessage);
            } else if ( type === 2){
                $('#terminal').terminal().set_prompt(styledMessage);
            }
        } 
        */ 

        printStyledMessage('hello world', "h1", "test")
        var testMessage = $('<h1 class="test">Hello World</h1>') 
        this.echo(testMessage);
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
        function echoStyledMessage(message, tag, className) { 
        
            var echoStyledMessage = $(`<${tag} class="${className}">${message}</${tag}>`);
            $('#terminal').terminal().echo(echoStyledMessage);
        
        }
        
        function promptStyledMessage(format,color,background_color,message){

            var promptStyledMessage = `[[${format};${color};${background_color}]${message}]`;
            $('#terminal').terminal().set_prompt(() => promptStyledMessage);

        }


        const animationFrames = [
            "Learning: ▌          ▐ 00%",
            "Learning: ▌▒         ▐ 05%",
            "Learning: ▌█         ▐ 10%",
            "Learning: ▌█▒        ▐ 15%",
            "Learning: ▌██        ▐ 20%",
            "Learning: ▌██▒       ▐ 25%",
            "Learning: ▌███       ▐ 30%",
            "Learning: ▌███▒      ▐ 35%",
            "Learning: ▌████      ▐ 40%",
            "Learning: ▌████▒     ▐ 45%",
            "Learning: ▌█████     ▐ 50%",
            "Learning: ▌█████▒    ▐ 55%",
            "Learning: ▌██████    ▐ 60%",
            "Learning: ▌██████▒   ▐ 65%",
            "Learning: ▌███████   ▐ 70%",
            "Learning: ▌███████▒  ▐ 75%",
            "Learning: ▌████████  ▐ 80%",
            "Learning: ▌████████▒ ▐ 85%",
            "Learning: ▌█████████ ▐ 90%",
            "Learning: ▌█████████▒▐ 95%",
            "Learning: ▌██████████▐ 100%",
            "Learning: ▌██████████▐ 100%",
            "Learning: ▌██████████▐ 100%",
            "Learning: ▌██████████▐ 100%",
            "Learning: ▌██████████▐ 100%",

        ];
    
        const animationSpeed = 75; // Speed of animation in milliseconds
        let currentIndex = 0;
    
        this.disable(); // disables input line
    
        const animationInterval = setInterval(() => {
            if (currentIndex === animationFrames.length) {
                clearInterval(animationInterval);
                intelligence++;
                this.echo(`Gained [[b;#11ff00;#0e0e0e]1] intelligence, total intelligence:[[b;#11ff00;#0e0e0e] ${intelligence}]`);
                this.set_prompt(">");
                this.enable();
    
                if (intelligence === 2) {
                    this.echo("╔═════════════════════════════════╗")
                    this.echo("╟ Unlocked upgrade : learn lvl 2  ╢")
                    this.echo("╚═════════════════════════════════╝")
                    echoStyledMessage("You unlocked your first upgrade! to view upgrades," + " type upgrade into your input line to view upgrades!" ,"p","test")
                    
                }
    
                this.scrollToBottom();
                return;
            }
    
            promptStyledMessage("b","#11ff00","#0e0e0e", animationFrames[currentIndex]); // Replace the content of the current line
            currentIndex++;
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
    var frameInterval = 120 * 1000 // sends a tip every 2 min
    function tips() {
        /*
        $('#terminal').terminal().echo(new $.terminal.FramesAnimation([
            [""]
        ], 8));
        */

      // Code to run every frame
       //$('#terminal').terminal().echo('Running game loop...'); <- try to avoid echoing statments to the game loop
      // Call the game loop again for the next frame
      var tips = [
        "[[b;#0d1c0e;#ffffff] Tip ■ use the up ( ▲ ) or down ( ▼ ) keys to view your message history. ]"
    ]

        $('#terminal').terminal().echo(tips[0]);

        setTimeout(gameLoop, frameInterval);
    }
    

    // Start the game loop
    tips();
    
  });
  