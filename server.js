const express = require('express');
const app = express();
const fs = require("fs");   
const path = require("path");

const PORT = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, "public")));

const{home,employeesForm,add}=require("./modules/fileHandler");

app.get("/",home);
app.get("/employee/add",employeesForm);
app.post("/employee/add",add);

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});