const express = require('express');
const mysql = require('./scripts/dbcon.js');

const app = express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'})
const fetch = require("node-fetch");

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('port', 9248);
app.use(express.static('public'))

app.get('/', function(req, res){
    res.render('workout', {layout:null})
})

app.get('/', function (req, res){
    const formElem = document.getElementById('addWorkoutForm')

    formElem.addEventListener('submit', function(event){
        event.preventDefault()
    })
    let data = new FormData(formElem);
    for(let value of data.values()) {
        console.log(value)
    }
})
/*

app.get('/', function(req, res, next){
    let context = {};
    mysql.pool.query('SELECT * FROM workouts', function(err, rows){
        if(err){
            next(err);
            return;
        }
        context.results = JSON.stringify(rows);
        res.type('application/json')
        res.send(context)
        ;
    });
});

*/

/*
app.post('/',function(req,res,next){
    let context = {};
    mysql.pool.query("INSERT INTO workouts (`name`, `reps`, `weight`, `date`, `unit`, ) VALUES (?, ?, ?, ?, ?)",
        [req.body.name, req.body.reps, req.body.weight, req.body.date, req.body.unit], function(err, result){
        if(err){
            next(err);
            return;
        }
        context.results = result.insertId;
        res.send(context);
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
            res.send(context);
        })
    });
});
*/

app.use(function(req,res){
    res.status(404);
    res.send('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('plain/text');
    res.status(500);
    res.send('500');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});