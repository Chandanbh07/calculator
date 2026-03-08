const express = require('express');
const app = express();

app.use(express.json());

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//using query parameters
// https://localhost/sum?a=1&&b=2
app.get('/sum',function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    
    const sum = a+b;

    res.json({
        ans : sum
    });
})

//using path parametes
// https://localhost/sub/5/2
app.get('/sub/:a/:b',function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        ans: a-b
    });
});

app.post('/mul',function(req,res){
     const a = parseInt(req.body.a);
     const b = parseInt(req.body.b);

     const prod = a*b;
     res.json({
        ans: prod
     });
});

app.post('/div',function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    if(b === 0){
        return res.status(400).json({
            error:"Division by zero not allowed"
        });
    }

    res.json({
        ans: a/b
    })
})

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});