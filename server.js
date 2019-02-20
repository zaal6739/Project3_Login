var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 5000
var path = require('path')
var logger = require('morgan');


app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

//mongoose connection
const mongoURI = 'mongodb://zaal6739:604Sutter!@ds125385.mlab.com:25385/loginauthenticate';
mongoose.connect(mongoURI, { useNewUrlParser: true })
let db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"))
db.once("open", ()=> console.log("we are connected"))

//express
var Users = require('./routes/Users')
app.use('/users', Users)

const index = require('./routes/index');
app.use('/',index);

const businessRoute = require('./routes/Business');
app.use('/business', businessRoute);

app.use(logger('dev'));



app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//serve static assets if in heroku ****important for deployment
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=> {
            res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
app.set('port', process.env.PORT || 5000);//added for heroku

//*** end of added for heroku deployment */



app.listen(port, () => {
    console.log("Server is running on port: " + port)
})