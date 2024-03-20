var data = 0;
var dataPerCmd = 1



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
        console.log(`echoed "${text}" to term`)
      },

      dat: function(){
        var randFile = function() {
          var items = [
            "terminal-color-scheme-editor.css",
            "command-history-viewer.js",
            "intelligent-tab-completion.py",
            "shell-scripting-tutorial.md",
            "keyboard-shortcuts-customizer.html",
            "terminal-icon-pack.jsx",
            "directory-navigation-enhancer.rb",
            "command-alias-manager.json",
            "terminal-appearance-customizer.swift",
            "multi-clipboard-manager.cs",
            "terminal-multiplexer-application.java",
            "command-autocomplete-engine.ts",
            "terminal-emulator-core.go",
            "shell-integration-toolkit.py",
            "terminal-color-scheme-gallery.php",
            "command-parser-interpreter.js",
            "terminal-settings-configurator.md",
            "file-permissions-visualizer.html",
            "terminal-profile-manager.jsx",
            "command-execution-tracer.rb",
            "terminal-utility-collection.json",
            "secure-file-transfer-client.swift",
            "terminal-keybinding-customizer.cs",
            "shell-extension-framework.java",
            "terminal-window-manager.ts",
            "command-search-accelerator.go",
            "terminal-font-installer.py",
            "shell-prompt-designer.php",
            "terminal-hotkey-configurator.js",
            "command-logging-analyzer.md",
            "terminal-notification-center.html",
            "shell-variable-explorer.jsx",
            "terminal-theme-creator.rb",
            "command-suggestion-engine.json",
            "terminal-plugin-manager.swift",
            "shell-function-library.cs",
            "terminal-appearance-tweaker.java",
            "command-runner-automator.ts",
            "shell-scripting-debugger.go",
            "terminal-tab-manager.py",
            "command-editor-enhancements.php",
            "terminal-layout-designer.js",
            "shell-command-reference.md",
            "terminal-shortcut-customizer.html",
            "command-highlighting-beautifier.jsx",
            "terminal-pane-organizer.rb",
            "shell-debugging-toolkit.json",
            "terminal-transparency-controller.swift",
            "command-formatting-stylizer.cs",
            "terminal-session-manager.java",
            "shell-wildcard-explorer.ts",
            "terminal-scrolling-optimizer.go",
            "command-argument-parser.py",
            "terminal-profile-synchronizer.php",
            "shell-scripting-boilerplate.js",
            "terminal-keymap-designer.md",
            "command-piping-visualizer.html",
            "terminal-gesture-controller.jsx",
            "shell-environment-configurator.rb",
            "terminal-customization-wizard.json",
            "command-substitution-enhancer.swift",
            "terminal-color-palette-editor.cs",
            "shell-scripting-linter.java",
            "terminal-performance-monitor.ts",
            "command-chaining-helper.go",
            "terminal-cursor-customizer.py",
            "shell-scripting-template.php",
            "terminal-search-accelerator.js",
            "command-history-analyzer.md",
            "terminal-styling-sandbox.html",
            "shell-scripting-playground.jsx",
            "terminal-pane-splitting-tool.rb",
            "command-trigger-manager.json",
            "terminal-font-previewer.swift",
            "shell-scripting-refactorer.cs",
            "terminal-snapshot-manager.java",
            "command-alias-organizer.ts",
            "terminal-scripting-framework.go",
            "shell-scripting-boilerplate.py",
            "terminal-snippet-library.php",
            "command-completion-enhancer.js",
            "terminal-tool-collection.md",
            "shell-scripting-cheatsheet.html",
            "terminal-plugin-explorer.jsx",
            "command-expansion-analyzer.rb",
            "terminal-scripting-sandbox.json",
            "shell-scripting-formatter.swift",
            "terminal-theme-customizer.cs",
            "command-execution-tracker.java",
            "terminal-macro-recorder.ts",
            "shell-scripting-optimizer.go"
          ]

          const randItem = Math.floor(Math.random() * items.length);

          return items[randItem]

        }
        var space = `${dataPerCmd} KB`
        var frames = [
`⠋ Allocating Storage - | ${space} | `, 
`⠙ Allocating Storage - | ${space} |`,
`⠹ Allocating Storage - | ${space} |`,
`⠸ Allocating Storage - | ${space} |`,
`⠼ Allocating Storage - | ${space} |`,
`⠴ Allocating Storage - | ${space} |`,
`⠦ Allocating Storage - | ${space} |`,
`⠧ Allocating Storage - | ${space} |`,
`⠇ Allocating Storage - | ${space} |`,
`⠏ Allocating Storage - | ${space} |`,
`⠋ Connecting to root node - | ${space} |`,
`⠙ Connecting to root node - | ${space} |`,
`⠹ Connecting to root node - | ${space} |`,
`⠸ Connecting to root node - | ${space} |`,
`⠼ Connecting to root node - | ${space} |`,
`⠴ Connecting to root node - | ${space} |`,
`⠦ Connecting to root node - | ${space} |`,
`⠧ Connecting to root node - | ${space} |`,
`⠇ Connecting to root node - | ${space} |`,
`⠏ Connecting to root node - | ${space} |`,

`✓ Collected data - | ${space} |

⠋ Downloading file(s) - | ${randFile()} |`, 
`✓ Collected data - | ${space} |

⠙ Downloading file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠹ Downloading file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠸ Downloading file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠼ Downloading file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠴ Downloading file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠦ Downloading file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠧ Downloading file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠇ Downloading file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠏ Downloading file(s) - | ${randFile()} |`,

`✓ Collected data - | ${space} |

⠋ Decompressing file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠙ Decompressing file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠹ Decompressing file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠸ Decompressing file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠼ Decompressing file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠴ Decompressing file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠦ Decompressing file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠧ Decompressing file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠇ Decompressing file(s) - | ${randFile()} |`,
`✓ Collected data - | ${space} |

⠏ Decompressing file(s) - | ${randFile()} |`,

`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌          ▐ 00%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌          ▐ 05%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌█         ▐ 10%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌█         ▐ 15%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌██        ▐ 20%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌██        ▐ 25%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌███       ▐ 30%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌███       ▐ 35%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌████      ▐ 40%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌████      ▐ 45%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌█████     ▐ 50%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌█████     ▐ 55%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌██████    ▐ 60%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌██████    ▐ 65%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌███████   ▐ 70%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌███████   ▐ 75%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌████████  ▐ 80%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌████████  ▐ 85%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌█████████ ▐ 90%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌█████████ ▐ 95%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌██████████▐ 100%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌██████████▐ 100%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌██████████▐ 100%`,
`✓ Collected data - | ${space} |

✓ Added file(s) - | ${randFile()} |

Compiling: ▌██████████▐ 100%`,

        ];

        term.animate(frames, 50)
        .then(() => { // Code to run after promise is resolved

          data += 1;
          this.echo(`Allocated ${dataPerCmd} of data, new storage ${data}`);
        
        })
        .catch((error) => {

          console.error('Error:', error);
        
        });
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

