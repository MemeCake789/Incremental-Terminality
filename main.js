class Terminal {
      constructor(outputElement) {
        this.outputElement = outputElement;
      }

      echo(text) {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        this.outputElement.appendChild(paragraph);
      }
    }

    const terminalOutput = document.getElementById("terminal-output");
    const commandInput = document.getElementById("command-input");
    const terminal = new Terminal(terminalOutput);

    commandInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        
        const command = commandInput.value.trim();
        terminal.echo(`$ main/users/anonymous>  ${command}`); // Display the entered command

        try {
          // Basic command evaluation (replace with your actual command logic)
          if (command === "echo hey") {
            terminal.echo(``);
          } else {
            terminal.echo("Unknown command");
          }
        } catch (error) {
          terminal.echo("Error: " + error.message);
        }

        commandInput.value = "";
      }
    });