const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/server_db",{
    useNewUrlParser:true, 
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Succeded");
}).catch((err)=>{
    console.log(err);
});

const userInfoSchema = new mongoose.Schema({
    UserId: {
        type: String,
        required: true,
        unique: true
    },
    Password: String
});

const Userinfo = new mongoose.model('UserInfoData',userInfoSchema);

app.use('/static', express.static('static'));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname,'views'));


app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
});


app.post('/',(req,res)=>{
    var body_ = new Userinfo(req.body);
    body_.save().then(()=>{
        console.log('Item Saved To Database');
        res.status(200).render('aboutPage.pug');
    });
});

app.get('/signin',(req,res)=>{
    res.status(200).render('SignIn.pug');
});

// app.post('/signin',(req,res)=>{
//     // var body_signIn = new userInfoSchema(req.body);
//     // console.log(req.body);
//     // console.log(req.body.Password)
//     // console.log(req.body.UserId)
//     if (req.body.UserId == Userinfo.find({UserId : req.body.UserId})) {
//         if (req.body.Password == Userinfo.find({Password : req.body.Password})) {
//             console.log('Redirectiong To BlogPosting Page');
//             res.status(200).render('aboutPage.pug');
//         };
//     };
// });

app.post('/signin', async (req, res) => {
  const user = await Userinfo.findOne({
    UserId: req.body.UserId,
    Password: req.body.Password
  });

  if (user) {
    console.log('Redirecting To BlogPosting Page');
    res.status(200).render('aboutPage.pug');
  } else {
    // Handle invalid credentials
    res.status(401).render('NotFound.pug');
  }
});



// Closing Direct Acesss to the about page::This is Beacuse, I Want Only Registred Users to be Able to Acess This WebPage
// app.get('/about',(req,res)=>{
//     res.status(200).render('aboutPage.pug');
// });

app.listen(port,()=>{
    console.log(`Application Is Running At 127.0.0.1 at Port ${port}`);
});