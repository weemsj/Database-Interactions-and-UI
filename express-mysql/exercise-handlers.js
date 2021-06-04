const express = require('express');
const mysql = require('./dbcon.js');
const req = new XMLHttpRequest()

const app = express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'});
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 9248);
app.use(express.static('public'));

app.get('/',function(req,res){
    let queryP = [];
    for (let param in req.query){
        queryP.push({'name':param,'value':req.query[param]})
    }
    let context = {};
    context.infoList = queryP;
    res.render('get-checker', context);
});

app.post('/',function(req,res){
    let queryP = [];
    for (let param in req.query){
        queryP.push({'name':param,'value':req.query[param]})
    }
    console.log(queryP);
    console.log(req.query);
    let context = {};
    context.infoList = queryP;
    res.render('post-check', context);
});

app.post('/', function(req,res){
    let queryP = [];
    for (let param in req.body){
        queryP.push({'name':param,'value':req.body[param]})
    }
    console.log(queryP);
    console.log(req.body);
    let context = {};
    context.dataList = queryP;
    res.render('post-check', context);
});
app.get('/', function(req, res, next){
    let context = {};
    mysql.pool.query('SELECT * FROM workouts', function(err, rows, fields){
        if(err){
            next(err);
            return;
        }
        context.results = JSON.stringify(rows);
        res.render('see', context);
    });
});

app.get('/',function(req,res,next){
    let context = {};
    mysql.pool.query("INSERT INTO workouts (`name`) VALUES (?)", [req.query.c], function(err, result){
        if(err){
            next(err);
            return;
        }
        context.results = "Inserted id " + result.insertId;
        res.render('home',context);
    });
});

app.get('/reset-table',function(req,res,next){
    let context = {};
    mysql.pool.query("DROP TABLE IF EXISTS workouts", function(err){ //replace your connection pool with the your variable containing the connection pool
        let createString = "CREATE TABLE workouts("+
            "id INT PRIMARY KEY AUTO_INCREMENT,"+
            "name VARCHAR(255) NOT NULL,"+
            "reps INT,"+
            "weight INT,"+
            "date DATE,"+
            "lbs BOOLEAN)";
        mysql.pool.query(createString, function(err){
            context.results = "Table reset";
            res.render('exercise-table',context);
        })
    });
});


app.use(function(req,res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});