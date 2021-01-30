let express = require('express');
const fs = require('fs');
let app = express();
let port= 8000;
var cors = require('cors')
app.use(cors())
const res = fs.readFileSync('data/data.json', 'utf-8');
let data = JSON.parse(res);
app.use(express.static(__dirname+ '/views'));
app.get('/mainPage', (req, res)=>{
    res.render('mainPage', {data:data})
});

app.get('/', (req, res)=>{
   res.redirect('/mainPage')
});
app.get('/data', (req, res)=>{
    res.json(data)
})
app.set('view engine', 'ejs');

app.listen(port);