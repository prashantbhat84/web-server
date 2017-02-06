var express= require('express');
var app =express();
var port =3000;
var middleware={
  requireauthentication: function (req,res,next) {
    console.log("private route hit");
    next();
  },
  logger:function (req,res,next) {
    console.log(new Date().toString()+req.method+" "+req.originalUrl);
    next();
  }
};
app.use(middleware.logger);
app.get('/',middleware.requireauthentication, function (req,res) {
res.send('hello express');

});

app.get('/about',middleware.requireauthentication, function (req,res) {
res.send('About');

});
//console.log(__dirname);
app.use(express.static(__dirname+"/public"));
app.listen(port,function(){
  console.log('express server started. Port no:'+port);
});
