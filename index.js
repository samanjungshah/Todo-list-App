const  express = require('express');
const app  = express();
const bodyParser = require('body-parser');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({urlencoded:true}));
app.use(express.static("public"));

var newItem = ["Eat","Sleep","Repeat"];

app.get('/',(req,res)=>{


    var today = new Date();
    var currentDay = today.getDay();
    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day = today.toLocaleDateString("en-US",options);

    
    res.render('list',{kindOfDay:day,newListItem:newItem});      


})

app.post('/',(req,res)=>{
    var item = req.body.newItem;
    newItem.push(item);

    res.redirect("/");
})


app.listen(process.env.PORT || 3000,()=>{
    console.log('Server started on port 3000');
});
