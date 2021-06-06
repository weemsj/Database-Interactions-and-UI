const express = require('express');
const mysql = require('./dbcon.js');
const bodyParser = require('body-parser');

const app = express();
const handlebars = require('express-handlebars').create({defaultLayout:'main'})

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 9248);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function(req, res){
    res.render('workout.html', {layout:null})
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

app.post('/api/exercise', function(req, res){
    let context = {};
    res.body
    res.json(req.body);
})

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