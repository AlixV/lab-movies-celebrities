const { get } = require('express/lib/response'); // ???

const router = require('express').Router()

const Celebrity = require("../models/Celebrity.model")


router.get("/celebrities/create", (req, res, next)=>{
 res.render("celebrities/new-celebrity.hbs")
 // why not .hbs at the end ?
});

router.post("/celebrities/create", (req, res, next) =>{
    Celebrity.create(req.body)
    .then((newCelebrity)=>{
        console.log("New celebrity :", newCelebrity );
        res.render("/celebrities");
    })
    .catch((e)=>{
        console.log(e);
        res.render("celebrities/new-celebrity");
    })
})

// remember to link these two new files to either 
// app.js or routes/index.js so your server has access to them.

// If everything is okay, render the celebrities/celebrities.hbs view 
//and pass the array of celebrities into the view as a variable... ??

// EN COURS : ITERATION  3.3

router.get("/celebrities", (req, res, next)=> {
    Celebrity.find()
    .then((dbResponse)=> {
        console.log('dbResponse :', dbResponse)
        res.render("celebrities/celebrities.hbs", {
            celebrity : dbResponse,
        })
    }) .catch((e)=>console.log(e));
})

module.exports = router