var points = 0;

$('body').terminal({
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
            "Frame 1",
            "Frame 2",
            "Frame 3",
            ""// always have the last frame blank so it can show the full animaion
        ];

        var animationSpeed = 500; // Speed of animation in milliseconds

        var currentIndex = 0;

        this.disable(); // disables input line

        var animationInterval = setInterval(() => {
            var lastLineIndex = this.last_index(); // Get the index of the last line
            this.set_prompt(animationFrames[currentIndex]); // Replace the content of the current line
            currentIndex++;

            if (currentIndex === animationFrames.length) {
                clearInterval(animationInterval);
                points++;
                this.echo(`Added 1 point, total points: ${points}`);
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
}, {
    greetings: greetings.innerHTML + "[[b;blue;#0e0e0e]Hello!] Welcome to my [[b;blue;#0e0e0e]incremental game!] \n    To start, type [[b;blue;#0e0e0e]help] on the command line\n"
});
