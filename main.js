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

      // Add more commands as needed
    };
  }

  evaluateCommand(commandName, ...params) {
    if (this.commands.hasOwnProperty(commandName)) {
      try {
        return this.commands[commandName](...params);
      } catch (error) {
        term.echo(`Error: ${error.message}`);          // displays the actual javascript error message
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
  }

  echo(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    this.out.appendChild(paragraph);
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
    const commandParts = command.split(/\s+/);           // Split on whitespace (multiple spaces)
    const commandName = commandParts[0];
    const params = commandParts.slice(1);                // Extract parameters from index 1 onwards

    cmds.evaluateCommand(commandName, ...params);

    terminalInput.value = "";
  }
});

// Inspect Element Bookmarklet For when in working in school
javascript:(function () {     var script =  document.createElement('script');    script.src="//cdn.jsdelivr.net/npm/eruda";     document.body.appendChild(script);    script.onload = function () {         eruda.init()     } })();
