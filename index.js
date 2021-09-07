const express = require('express');
const nunjucks = require('nunjucks');
const drug_data = require('./data.json');

var app = express();

nunjucks.configure('', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    // res.send(nunjucks.renderString('Hello {{ username }}', { username: 'James' }));
    // res.send(nunjucks.render('test_template.html', { username: 'James' }));
    res.send(nunjucks.render('monographs.html', {"drug_data": drug_data }));
});

app.use('/public', express.static('public'));

// NEXT STEPS:
// - Figure out grid awesomeness
// - research + add more drugs

port = 3000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
