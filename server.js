var express= require('express');
var app =express();
var PORT =process.env.PORT || 3000;
var middleware=require('./middleware.js');

/*var middleware={
  requireauthentication: function (req,res,next) {
    console.log("private route hit");
    next();
  },
  logger:function (req,res,next) {
    console.log(new Date().toString()+req.method+" "+req.originalUrl);
    next();
  }
};*/
app.use(middleware.logger);
app.get('/',middleware.requireauthentication, function (req,res) {
res.send('hello express js');

});

app.get('/about',middleware.requireauthentication, function (req,res) {
res.send('About us !');

});
//console.log(__dirname);
app.use(express.static(__dirname+"/public"));
app.listen(PORT,function(){
  console.log('express server started. Port no:'+PORT);
});
