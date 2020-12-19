'use strict'

const mongoose = require("mongoose");

const app = require('./app')
const port = process.env.PORT || 3000;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Tico:0920@budgetapp.8xd3r.mongodb.net/budgetApp?retryWrites=true&w=majority',{ useNewUrlParser:true, useUnifiedTopology: true },
(err, res) =>{

if(err){
 throw err;
}else{
    mongoose.Promise = global.Promise;
}
})


app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
  });