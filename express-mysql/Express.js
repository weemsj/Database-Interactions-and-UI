let express = require('express');

let app = express();

app.set('port', 9248);

app.get('/',function(req,res){
    res.type('text/plain');
    res.send(Math.random()*2);
});

app.get('/other-page',function(req,res){
    res.type('text/plain');
    res.send('Welcome to the other page!');
});

app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});