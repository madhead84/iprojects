var http = require('http');

var server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end(JSON.stringify(games));
});

server.listen('3000', '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:3000/');
});

var games = [
    {
        name: 'Batman Begins',
        imageURL: 'images/Batman-Begins-290x180.jpg'
    },
    {
        name: 'Jackpot Giant',
        imageURL: 'images/jackpot-giant-290x180.jpg'
    },
    {
        name: 'Premium European Roulette',
        imageURL: 'images/european-roulette-290x180.jpg'
    },
    {
        name: 'Da Vinci’s Vault',
        imageURL: 'images/Da-vinci-Vault-290x180.jpg'
    },
    {
        name: 'Murder Mystery',
        imageURL: 'images/Murder-Mystery-290x180.jpg'
    },
    {
        name: 'Premium Blackjack',
        imageURL: 'images/PremiumBlackjack-290x180.jpg'
    },
    {
        name: 'Gladiator 2',
        imageURL: 'images/Gladiator-road-to-rome-290x180.jpg'
    }
];