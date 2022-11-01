const express = require('express');

const app = express();
const path = require('path');
const router = express.Router();

// Serve file from directory
router.get('/banner',function(req,res){
    res.sendFile(path.join(__dirname+'/banner/banner.html'));
});
  
router.get('/native',function(req,res){
    res.sendFile(path.join(__dirname+'/native/native.html'));
});
  
app.use('/', router);
const PORT = process.env.PORT || 3000;

app.listen(PORT);

