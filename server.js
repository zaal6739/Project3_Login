var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
var port = process.env.PORT || 5000
var path = require('path')

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

//mongoose connection
const mongoURI = 'mongodb://zaal6739:604Sutter!@ds125385.mlab.com:25385/loginauthenticate'
mongoose.connect(mongoURI, { useNewUrlParser: true })
let db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"))
db.once("open", ()=> console.log("we are connected"))

//express
var Users = require('./routes/Users')
app.use('/users', Users)
//serve static assets if in heroku 
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=> {
            res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
app.set('port', process.env.PORT || 5000);//added for heroku



const businessRoute = require('./routes/Business');
app.use('/business', businessRoute);

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})