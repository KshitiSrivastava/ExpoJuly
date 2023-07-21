const express = require("express");
const app = express();
require("./db/conn");
const Register = require("./models/registers");
const port = process.env.PORT || 3000;
const path = require('path'); 
const static_path = path.join(__dirname, "../public");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));

app.get("/" ,(req,res) => {
    res.render("index");
});

// app.get("/login" ,(req,res) => {
//     res.render("login");
// });

app.get("/signUp" ,(req,res) => {
    res.render("signUp");
});

app.post("/signUp" , async(req,res) => {
    try
    {
        const registerEmployee = new Register({
            name: req.body.name,
            mail: req.body.mail ,
            phone: req.body.phone ,
            organization: req.body.organization ,
            designation: req.body.designation ,
            country: req.body.country ,
            Iam: req.body.Iam ,
            password: req.body.password
        })

        const registered = await registerEmployee.save();
        response.status(201).render.send("Registered successfully! Please login");
    } catch(error)
    {
        res.status(400).send(error);
    }

});

// app.post("/login" , async(req,res) => {
//     res.sendFile("dashboard.html");
// });


// app.post("/login" , async(req,res) => {
//     try
//     {
//         const mail = req.body.email;
//         const password = req.body.password;

//         const useremail = await Register.findOne({email:mail});
//         const userpassword = await Register.findOne({password:password});

//         if ( useremail.email === mail && userpassword.password === password )
//         {
//             res.send("Login successful");
//             res.render("dashboard");
//         }
//         else
//         {
//             res.send("wrong");
//             res.render("dashboard");
//         }

//     } catch(error) {
//         res.status(400).send("Invalid Credentials");
//         res.render("dashboard");
//     }


// });

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})