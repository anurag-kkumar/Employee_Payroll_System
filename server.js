const express = require('express');
const app = express();
const fs = require("fs");   
const path = require("path");

const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/employee/add', (req, res) => {
    res.render('add');
});

app.post('/employee/add', (req, res) => {

    const { name, department, salary } = req.body;

    if (!name || salary <= 0) {
        return res.send("Invalid Input");
    }

    fs.readFile(filePath, "utf-8", (err, data) => {

        let employees = [];

        if (!err) {
            employees = JSON.parse(data);
        }

        const newEmployee = {
            id: Date.now(),
            name,
            department,
            salary
        };

        employees.push(newEmployee);

        fs.writeFile(employee.json, JSON.stringify(employees, null, 2), (err) => {

            if (err) {
                return res.send("Error saving data");
            }

            res.redirect("/");
        });

    });
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});