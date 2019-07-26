const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json()); // Required for passing JSON to `req.body`
app.use(express.urlencoded({extended: true}));
const port = 7431;

app.get('/dranks/:alcool', async (req, res)=>{
  const {alcool} = req.params;
  const {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcool}`)
  // console.log(data);
  // res.status(501);
  // res.json({message: "get me a drank!"});
  res.json(data);
});

app.get('*', (req, res)=>{
  res.sendFile('./index.html', {root: __dirname });
// res.status(200).json({message: "hi mom"});
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})



// res.statusMessage = "Current password does not match";
//     res.status(400).end();