const fs=require("fs");

exports.home=(req,res)=>{
  const data = fs.readFileSync("employee.json", "utf-8");
    const employees = JSON.parse(data);

    let totalSalary = 0;
    let totaltax=0;
    employees.forEach(emp => {
        emp.salary = Number(emp.salary);     
        emp.tax = emp.salary * 0.10;          
        emp.netSalary = emp.salary - emp.tax; 

        totalSalary += emp.salary;
        totaltax += emp.tax;

    });

    const totalEmployees = employees.length;

    res.render("index", {
        employees,
        totalEmployees,
        totalSalary,
        totaltax
    });
};

exports.employeesForm=(req,res)=>{
    res.render('add');
};

exports.add=(req,res)=>{

    const { name, department, salary } = req.body;

    if (!name || salary <= 0) {
        return res.send("Invalid Input");
    }
    
    fs.readFile("employee.json", "utf-8", (err, data) => {

        let employees = [];

        if (!err) {
            employees = JSON.parse(data);
        }

        const newEmployee = {
            id: Math.random(),
            name,
            department,
            salary
        };

        employees.push(newEmployee);

        fs.writeFile("employee.json", JSON.stringify(employees, null, 2), (err) => {

            if (err) {
                return res.send("Error saving data");
            }

            res.redirect("/");
        });

    });
}

