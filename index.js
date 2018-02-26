const express = require('express');
const app = express();
const port =  process.env.PORT || 1234;

app.get('/',(req,res)=>{
  res.send('Hey There !!');
});

app.listen(1234,()=>{
  console.log(`server is up at port ${port}`);
})
