var data = 0;
class Commands {
  constructor() {
    this.commands = {
      sum: function(a, b) {

        this.outA = parseInt(a) 
        this.outB = parseInt(b)

        term.echo(this.outA+this.outB)
      },

      echo: function(text){
        term.echo(text)
      },

      dat: function(){
        const rndmFile = ["fix.md", "sound.js", "lock.js"]
        var num = "54 MB"
        var frames = [
`⠋ Allocating Storage - | ${num} | `, 
`⠙ Allocating Storage - | ${num} |`,
`⠹ Allocating Storage - | ${num} |`,
`⠸ Allocating Storage - | ${num} |`,
`⠼ Allocating Storage - | ${num} |`,
`⠴ Allocating Storage - | ${num} |`,
`⠦ Allocating Storage - | ${num} |`,
`⠧ Allocating Storage - | ${num} |`,
`⠇ Allocating Storage - | ${num} |`,
`⠏ Allocating Storage - | ${num} |`,
`⠋ Connecting to root node - | ${num} |`,
`⠙ Connecting to root node - | ${num} |`,
`⠹ Connecting to root node - | ${num} |`,
`⠸ Connecting to root node - | ${num} |`,
`⠼ Connecting to root node - | ${num} |`,
`⠴ Connecting to root node - | ${num} |`,
`⠦ Connecting to root node - | ${num} |`,
`⠧ Connecting to root node - | ${num} |`,
`⠇ Connecting to root node - | ${num} |`,
`⠏ Connecting to root node - | ${num} |`,

`✓ Collected data - | ${num} |

⠋ Downloading file - | ${rndmFile} |`, 
`✓ Collected data - | ${num} |

⠙ Downloading file - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠹ Downloading file - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠸ Downloading file - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠼ Downloading file - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠴ Downloading file - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠦ Downloading file - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠧ Downloading file - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠇ Downloading file - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠏ Downloading file - | ${rndmFile} |`,

`✓ Collected data - | ${num} |

⠋ Decompressing files - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠙ Decompressing files - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠹ Decompressing files - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠸ Decompressing files - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠼ Decompressing files - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠴ Decompressing files - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠦ Decompressing files - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠧ Decompressing files - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠇ Decompressing files - | ${rndmFile} |`,
`✓ Collected data - | ${num} |

⠏ Decompressing files - | ${rndmFile} |`,

`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌          ▐ 00%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌          ▐ 05%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌█         ▐ 10%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌█         ▐ 15%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌██        ▐ 20%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌██        ▐ 25%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌███       ▐ 30%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌███       ▐ 35%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌████      ▐ 40%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌████      ▐ 45%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌█████     ▐ 50%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌█████     ▐ 55%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌██████    ▐ 60%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌██████    ▐ 65%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌███████   ▐ 70%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌███████   ▐ 75%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌████████  ▐ 80%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌████████  ▐ 85%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌█████████ ▐ 90%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌█████████ ▐ 95%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌██████████▐ 100%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌██████████▐ 100%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌██████████▐ 100%`,
`✓ Collected data - | ${num} |

✓ Added file - | ${rndmFile} |

Compiling: ▌██████████▐ 100%`,

        ];

         term.animate(frames, 50) 
      }
      // Add more commands as needed
    };
  }

  evaluateCommand(commandName, ...params) {
    if (this.commands.hasOwnProperty(commandName)) {
      try {
        return this.commands[commandName](...params);
      } catch (error) {
        term.echo(`Error: ${error.message}`);// displays the actual javascript error message
      }
    } else {
      term.echo(`term: ${commandName} command not found, for list of commands, type "help" `);
    }
  }
  
}

class Terminal {
  constructor(outputElement, inputElement) {
    this.out = outputElement;
    this.in = inputElement;


    this.colors = {
    red:    "#e82337",
    orange: "#fa6735",
    yellow: "#fff57a",
    green:  "#8de35d",
    blue:   "#4c89ee",
    purple: "#4837c7",
    violet: "#f43a3a",

    black:  "#040519",
    grey:   "#555555",
    white:  "#ffffff",

    back:   "#181818",
    text:   "#ebebeb",
    error:  "#ff0000",
    }

  }

  echo(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    this.out.appendChild(paragraph);
  }

  animate(frames, time) {
    this.echo(null)

    return new Promise((resolve) => {
      let currentFrame = 0;
      const targetElement = term.out.children[term.out.children.length - 1];
  
      const interval = setInterval(() => {
        targetElement.innerHTML = frames[currentFrame];
        currentFrame++;
  
        if (currentFrame === frames.length) {
clearInterval(interval);
resolve();
        }
      }, time);
    });
  }
}

const terminalOutput = document.getElementById("terminal-output");
const terminalInput = document.getElementById("command-input");

const term = new Terminal(terminalOutput, terminalInput);
const cmds = new Commands();

terminalInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const command = terminalInput.value.trim();
    term.echo(`$ main/users/anonymous> ${command}`);     // Display the entered command

    // Improved command parsing:
    const commandParts = command.split(/\s+/); // Split on whitespace (multiple spaces)
    const commandName = commandParts[0];
    const params = commandParts.slice(1);      // Extract parameters from index 1 onwards

    cmds.evaluateCommand(commandName, ...params);        

    terminalInput.value = "";
  }
});

