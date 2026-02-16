## Project Brief: Employee Payroll Syste
(EPS)
# Objective: Build a server-side web application to manage employee records and calculate
monthly payroll using Node.js, Express, and EJS.
#1. Project Requirements
Your application must fulfill the following functional requirements:
● Dashboard: A home page displaying a table of all employees.
● Payroll Calculation: The UI must display:
○ Basic Salary (Input by user).
○ Tax (10%): Calculated dynamically.
○ Net Salary: (Basic Salary - Tax).
● Registration: A form to add a new employee (Name, Department, Basic Salary).
● Data Persistence: All data must be saved in an employees.json file.
● Architecture: Use a custom module for file operations.

#2. Recommended Directory Structure
payroll-app/
├── modules/
│ └── fileHandler.js # Custom module for fs logic
├── public/
│ └── style.css # Styling for your table and form
├── views/
│ ├── index.ejs # Dashboard (The Table)
│ ├── add.ejs # Registration Form
│ └── edit.ejs # Update Employee Form
├── employees.json # Your JSON database
└── server.js # Main entry point

Step 1: The Foundation (Setup &amp; Data)
● Initialization: Run npm init -y and npm install express ejs.
● The Model: Create fileHandler.js using fs.promises. It must handle read() and write()
with try/catch to prevent server crashes.
● The JSON: Create employees.json and add one sample employee manually to test.
● Goal: Successfully log the employee data in your terminal when the server starts.
Step 2: The Dashboard &amp; Calculations (Read &amp; Display)
● Server Setup: Configure app.use(express.static(&#39;public&#39;)) and app.set(&#39;view engine&#39;,
&#39;ejs&#39;).
● Dashboard Logic: Fetch data from employees.json and pass it to index.ejs.
● EJS Math: Inside the table loop, calculate:
○ Tax = Basic Salary * 0.12 (12% Tax)
○ Net Salary = Basic Salary - Tax
● Goal: A clean, styled table showing all employee financial details.

#Step 3: CRUD (Create, Edit &amp; Delete)
● Add Employee: Create a POST route to receive form data. Convert salary to Number().
● Delete Logic: Create a route app.get(&#39;/delete/:id&#39;).
● Edit Logic: Create a route app.get(&#39;/edit/:id&#39;). Find the employee by ID and pass their
data to a form so it can be updated.
● Goal: Add a &quot;Delete&quot; and &quot;Edit&quot; link to every row in the table.

#Technical Requirements (The &quot;Must-Haves&quot;)
1. Unique IDs: Every new employee must have a unique ID (use Date.now()).
2. Data Validation: Do not allow empty names or negative salaries.
3. Redirection: After adding, editing, or deleting, always use res.redirect(&#39;/&#39;).
4. Static Files: All CSS must be served from the public folder.
