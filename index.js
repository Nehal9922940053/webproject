// JavaScript source code
/*const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: ' there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

*/
const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log("Application started Successfully");
});

app.use(express.static(__dirname));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

