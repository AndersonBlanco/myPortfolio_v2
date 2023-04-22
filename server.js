const express = require('express');
var app = express();

app.use(express.static('./components'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')

})

app.listen(3000, (req, res) =>{
    console.log('Server running')
})