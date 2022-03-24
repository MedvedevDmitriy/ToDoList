const express = require("express");
const app = express();
const PORT = process.env.PORT = 3000;

let usersRouter = express.Router();

usersRouter.get('/',function(req,res){
    res.status(200).json({'message' : 'USERS'});
});

app.use('/users', usersRouter);

app.listen(PORT,function(){
    console.log('Server is running at PORT:',PORT);
});