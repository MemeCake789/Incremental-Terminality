/*

    TODO:
        
    ■ Work on idle tools

*/
// █ Variables and Lists ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████



var intelligence = 0;
var intelegencePerCommand = 1;

var upgrades = [
    ["▌ Learn Level 2 ▌ Improves learning methods. ▌ Needs: 5 intelligence ▌ Buy Code: 2VWA ▌"]
]

var statements = [
    '[[b;rgb(129, 255, 129);rgb(20, 20, 20)]help] - view help commands.',
    "[[b;rgb(129, 255, 129);rgb(20, 20, 20)]learn] - learn how to code, gain some intelligence.",

    
];

// Create displayVars array
var displayVars = [];
displayVars.push("intelligence");

// █ FUNCTIONS ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████




function echoStyledMessage(message, tag, className) {         
	var echoStyledMessage = $(`<${tag} class="${className}">${message}</${tag}>`);
	$('#terminal').terminal().echo(echoStyledMessage);
}
        
function promptStyledMessage(format,color,background_color,message){
	var promptStyledMessage = `[[${format};${color};${background_color}]${message}]`;
	$('#terminal').terminal().set_prompt(() => promptStyledMessage);
}

function animateFrames(frames, speed, loopCount, endText) {
    var currentFrameIndex = 0;
    var loopCounter = 0;
    var terminal = $('#terminal').terminal();
  
    // Disable the command line
    terminal.disable();
  
    function printFrame() {      
      terminal.set_prompt(frames[currentFrameIndex]);
      currentFrameIndex++;
  
      if (currentFrameIndex >= frames.length) {
        // Reset the frame index to loop the animation
        currentFrameIndex = 0;
  
        // Increment the loop counter
        loopCounter++;
  
        // If the loop count has been reached, enable the command line and stop the animation
        if (loopCounter >= loopCount) {
          terminal.set_prompt("user@localhost: $ ")
          terminal.echo(endText);
          terminal.enable();
          return;
        }
      }
  
      // Schedule the next frame to be printed after the specified speed
      setTimeout(printFrame, speed);
    }
  
    // Start the animation
    printFrame();
  }

  
  
  
// █ Terminal ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████


$('#terminal').terminal({

    a: function(){
        var frames = [
`
line1
line2 
line3 `, // use `` for multiline strings
            "Frame 2",
            "Frame 3",
            // Add more frames here...
          ];
          
          var speed = 1000; // Speed in milliseconds
          
          animateFrames(frames, speed, 3);
          
          
    },

    upgrade: function() {
        var purchaseFrames = [
			"⠋ Purchasing",
			"⠙ Purchasing",
			"⠹ Purchasing",
			"⠸ Purchasing",
			"⠼ Purchasing",
			"⠴ Purchasing",
			"⠦ Purchasing",
			"⠧ Purchasing",
			"⠇ Purchasing",
			"⠏ Purchasing"
		]
        

        for (var i = 0; i < upgrades.length; i++) {
            const upgrade = upgrades[i];
            
            for (const line of upgrade) {
              echoStyledMessage(line, "p", "blue"); 
            }
          }

        
        this.read('Enter a buy code to purchase (case sensitive): ').then((code)=>{
            if (code === "2VWA"){

                if (intelligence >= 5){
                    intelligence -= 5;
                    intelegencePerCommand = 2;

                    animateFrames(purchaseFrames, 50, 5, `terminalitʎ@shop: Bought Learn Level 2 for 5 intelegence | Current intelegence : ${intelligence}`);
                } else {
                    echoStyledMessage("terminalitʎ@shop: You need 5 intelligence to buy this upgrade!","p","red");
                }

            } else {
                echoStyledMessage("terminalitʎ@shop: Cannot find that product!","p","red");
            }
            
        });

        
    },

    iam: function (name) {
        this.echo('Hello, ' + name +
            '. Welcome to GeeksForGeeks');
    },
    test: function () {


        this.echo("noteForReplit") // just to see if relpit works
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

        const learnFrames = [
`
⠋ Collecting data points - | rfetch.json | `, 
`
⠙ Collecting data points - | rfetch.json |`,
`
⠹ Collecting data points - | rfetch.json |`,
`
⠸ Collecting data points - | rfetch.json |`,
`
⠼ Collecting data points - | rfetch.json |`,
`
⠴ Collecting data points - | rfetch.json |`,
`
⠦ Collecting data points - | rfetch.json |`,
`
⠧ Collecting data points - | rfetch.json |`,
`
⠇ Collecting data points - | rfetch.json |`,
`
⠏ Collecting data points - | rfetch.json |`,
`
⠋ Downloading data points - | rfetch.json |`,
`
⠙ Downloading data points - | rfetch.json |`,
`
⠹ Downloading data points - | rfetch.json |`,
`
⠸ Downloading data points - | rfetch.json |`,
`
⠼ Downloading data points - | rfetch.json |`,
`
⠴ Downloading data points - | rfetch.json |`,
`
⠦ Downloading data points - | rfetch.json |`,
`
⠧ Downloading data points - | rfetch.json |`,
`
⠇ Downloading data points - | rfetch.json |`,
`
⠏ Downloading data points - | rfetch.json |`,

`
✓ Added file - | rfetch.json |

⠋ Collecting data points - | status.nix |`, 
`
✓ Added file - | rfetch.json |

⠙ Collecting data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠹ Collecting data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠸ Collecting data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠼ Collecting data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠴ Collecting data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠦ Collecting data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠧ Collecting data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠇ Collecting data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠏ Collecting data points - | status.nix |`,

`
✓ Added file - | rfetch.json |

⠋ Downloading data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠙ Downloading data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠹ Downloading data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠸ Downloading data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠼ Downloading data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠴ Downloading data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠦ Downloading data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠧ Downloading data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠇ Downloading data points - | status.nix |`,
`
✓ Added file - | rfetch.json |

⠏ Downloading data points - | status.nix |`,

`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌          ▐ 00%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌          ▐ 05%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌█         ▐ 10%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌█         ▐ 15%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌██        ▐ 20%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌██        ▐ 25%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌███       ▐ 30%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌███       ▐ 35%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌████      ▐ 40%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌████      ▐ 45%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌█████     ▐ 50%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌█████     ▐ 55%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌██████    ▐ 60%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌██████    ▐ 65%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌███████   ▐ 70%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌███████   ▐ 75%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌████████  ▐ 80%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌████████  ▐ 85%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌█████████ ▐ 90%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌█████████ ▐ 95%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌██████████▐ 100%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌██████████▐ 100%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌██████████▐ 100%`,
`
✓ Added file - | rfetch.json |

✓ Added file - | status.nix |

Compiling Data: ▌██████████▐ 100%`,

        ]
 
        const animationSpeed = 50; // Speed of animation in milliseconds
        let currentIndex = 0;
        
        this.disable(); // disables input line
    
        const animationInterval = setInterval(() => {
            if (currentIndex === learnFrames.length) {
                clearInterval(animationInterval);
                intelligence += intelegencePerCommand;
                echoStyledMessage("✓ Added file - [ rfetch.json ]","p","green")
                echoStyledMessage("✓ Added file - [ status.nix ]","p","green")
                echoStyledMessage("Compiling Data: ▌██████████▐ 100%","p","green")
                this.echo(`Gained [[b;rgb(129, 255, 129);#0e0e0e]${intelegencePerCommand}] intelligence, total intelligence:[[b;rgb(129, 255, 129);;#0e0e0e] ${intelligence}]`);
                this.set_prompt("user@localhost: $ ");
                this.enable();


                if (intelligence > 1) {
                    // Only add if not already in array
                    if(!displayVars.includes("intelligence")) {
                      displayVars.push("intelligence"); 
                    }
                  } else {
                    // Remove intelligence from list if present
                    let index = displayVars.indexOf("intelligence");
                    if (index !== -1) {
                      displayVars.splice(index, 1);
                    }
                  }
                  
    
                if (intelligence === 5) {
                    this.echo("╔═════════════════════════════════╗")
                    this.echo("╟ Unlocked upgrade : learn lvl 2  ╢")
                    this.echo("╚═════════════════════════════════╝")
                    echoStyledMessage("You unlocked your first upgrade! to view upgrades," + " type upgrade into your input line to view upgrades!" ,"p","blue")
                    statements.push('[[b;rgb(129, 255, 129);rgb(20, 20, 20)]upgrade] - view all upgrades')
                }
    
                this.scrollToBottom();
                return;
            }
    
            promptStyledMessage("b","rgb(129, 255, 129)","#0e0e0e", learnFrames[currentIndex]); // Replace the content of the current line
            currentIndex++;
            
        }, animationSpeed);

        
    },
    

    help: function () {

        
        for (var i = 0; i < statements.length; i++) {
            this.echo(statements[i]); // shows all messages
        }

    },

    onCommandNotFound: function(command) {
        // Scroll to the bottom of the terminal
        this.scrollToBottom();
        // echo a message

       
          
        
      },
    
    
}, {
    greetings: greetings.innerHTML + "[[b;#5da0d9;rgb(20, 20, 20);]Hello!] Welcome to [[b;#5da0d9;rgb(20, 20, 20);]Terminality!] \n    To start, type [[b;#5da0d9;rgb(20, 20, 20);]help] on the command line\n",
    prompt: 'user@localhost: $ ' 

});

$(function() {
	var frameInterval = 100; // sends a tip every 100 milliseconds

	function stats() {
		$('#stats').terminal().echo("hello");
		setTimeout(stats, frameInterval);
	}
	// Start the game loop
	stats();
});

$('#stats').terminal({

}, {
	greetings: 'Stats Terminal',
	prompt: 'stats> '
});

