const express = require('express')
const app = express()
const fs = require('fs')

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.use(express.static(__dirname));

app.get('/', (req, res) => {
	res.render(__dirname + '/welcome.html');
	res.end();
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))