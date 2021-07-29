//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) => {
    const num1 = Number(req.body.n1);
    const num2 = Number(req.body.n2);
    const result = num1 + num2;
    res.send(`The Result of the calculation is: ${result}`)
})

app.get('/bmicalculator', (req,res) => {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post('/bmicalculator', (req,res) => {
    const wt = parseFloat(req.body.weight);
    const ht = parseFloat(req.body.height);
    const bmi = wt / (ht * ht);
    res.send(`Your BMI is: ${bmi}`);
})

app.listen(port, () => {
    console.log(`my server is running on port: http://localhost:${port}`)
})