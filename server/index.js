const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({
  origin:true,
  credentials:true,
}));
app.use(express.json());
const port = 5000;


app.get('/message', (req, res) => {
  res.send('Hello World');
})
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
});