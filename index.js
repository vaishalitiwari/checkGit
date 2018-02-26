const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send('Hey There !!');
});

app.listen(1234,()=>{
  console.log('server is up at port 1234');
})
