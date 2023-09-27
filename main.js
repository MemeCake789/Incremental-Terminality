var points = 0;

$('body').terminal({
    iam: function (name) {
        this.echo('Hello, ' + name +
            '. Welcome to GeeksForGeeks');
    },
    test: function () {
        // https://terminal.jcubic.pl/api_reference.php#instance_methods
        this.echo("[[b;red;#0e0e0e]  red  ]")
        this.echo("[[b;orange;#0e0e0e]  orange  ]")
        this.echo("[[b;yellow;#0e0e0e]  yellow  ]")
        this.echo("[[b;green;#0e0e0e]  green  ]")
        this.echo("[[b;blue;#0e0e0e]  blue  ]")
        this.echo("[[b;purple;#0e0e0e]  purple  ]")
        this.echo("[[b;white;#0e0e0e]  white  ]")
    },

    learn: function(){
        startMessages = [
            "You look up a youtube tutorial on how to do hacking, but you give up after seeing a 124 hour long, 323 episode playlist. ", 
            "You opened up the terminal and type help, ", 
            "You look up a terminal simulator and start mashing random buttons on your keyboard. ``im such a hacker``, you say.",
            "You open up VScode and blank out not knowing what to do"]
        
        this.echo(startMessages[Math.floor((Math.random() * 3) + 1)]);
        points ++
            
        this.echo(`added [[b;#03fc03;#0e0e0e]1] point, total points: [[b;#03fc03;#0e0e0e]${points}] `);
    },

    help: function () {
        this.echo(
        '[[b;#03fc03;#0e0e0e]learn] - learn how to code, gain some points.\n'
        + '[[b;#03fc03;#0e0e0e]help] - view help commands');
    },
}, {
    greetings: greetings.innerHTML + "[[b;blue;#0e0e0e]Hello!] Welcome to my [[b;blue;#0e0e0e]incremental game!] \n    To start, type [[b;blue;#0e0e0e]help] on the command line\n"
});

