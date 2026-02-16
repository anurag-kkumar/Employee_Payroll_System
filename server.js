const express=require('express');
const app=express();
const path=require("path");
const PORT=5000;
app.set('view engine' , 'ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.render(`index`)
});
app.post('/addform',(req,res)=>{
    const{name,salary,bonus,allowance}=req.body;

    res.render('add');
})
app.listen(PORT,()=>{
    console.log(`server running on  ${PORT}`);
});




