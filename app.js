const express = require('express');

const app = express();
const path = require('path');
const router = express.Router();

// Serve file from directory
router.get('/video',function(req,res){
    res.sendFile(path.join(__dirname+'video/video.html'));
});
  
router.get('/native',function(req,res){
    res.sendFile(path.join(__dirname+'/native/native.html'));
});
  
app.use('/', router);
const PORT = process.env.PORT || 8080;

app.listen(PORT);
