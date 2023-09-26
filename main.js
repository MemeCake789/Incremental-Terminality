var points = 0;

$('body').terminal({
    iam: function (name) {
        this.echo('Hello, ' + name +
            '. Welcome to GeeksForGeeks');
    },
    founder: function () {
        this.echo('Sandeep Jain');
    },

    learn: function(){
        startMessages = [
            "You look up a youtube tutorial on how to do hacking, but you give up after seeing a 124 hour long, 323 episode playlist. ", 
            "You opened up the terminal and type help, ", 
            "You look up a terminal simulator and start mashing random buttons on your keyboard. ``im such a hacker``, you say.",
            "You open up VScode and blank out not knowing what to do"]
        
        this.echo(startMessages[Math.floor((Math.random() * 3) + 1)]);
        points ++
            
        this.echo(`added 1 point, total points: ${points}`);
    },

    help: function () {
        this.echo('iam - iam command and '
        + 'pass your name as argument\n'
        + 'founder to know the founder');
    },
}, {
    greetings: 'GeeksForGeeks - A place to'
        + ' learn DS, Algo and Computer '
        + 'Science for free'
});

