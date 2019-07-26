const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json()); // Required for passing JSON to `req.body`
app.use(express.urlencoded({extended: true}));
const port = 7431;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// app.get('/dranks/:alcool', async (req, res)=>{
//   const {alcool} = req.params;
//   let {data} = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${alcool}`)
//   if ((getRandomIntInclusive(0,10) === 1)||!data){
//     data = {
//       "strDrink":"THIS IS TRASH",
//       "strDrinkThumb":"https://previews.123rf.com/images/iko/iko1412/iko141200021/34616938-portrait-of-a-elderly-woman-with-a-yelling-expression.jpg",
//       "idDrink":"666"
//     };
//   }
//   else{
//     data = data.drinks[getRandomIntInclusive(0,20)];
//     res.status(500);
//   }
//   res.json(data);
// });

// app.get('/', (req, res)=>{
//   res.sendFile('./index.html', {root: __dirname });
// // res.status(200).json({message: "hi mom"});
// });


app.get('/drinks', (req, res)=>{
  res.json({results:[
    {
      "id": 1,
      "recipe": "espresso"
    },
    {
      "id": 2,
      "recipe": "latte"
    },
    {
      "id": 3,
      "recipe": "americano"
    },
    {
      "id": 4,
      "recipe": "black coffee"
    },
    {
      "id": 5,
      "recipe": "cappuccino"
    }
   ]
})
})
app.get('/customers', (req, res)=>{
  res.json({results:[
    {
      "id": 1,
      "name": "Margaret Thatcher",
      "email": "torygurl1981@uk.gov",
      "twitter": "@britbossbabe01"
    },
    {
      "id": 2,
      "name": "John Jacob Jinglehiemerschmidt",
      "email": "yourname@myname.too",
      "twitter": "@jjj_2"
    },
    {
      "id": 3,
      "name": "Stuart Little",
      "email": "mouse@wireless.tv",
      "twitter": "@mousendahouse"
    }
  ]
})
})
app.get('/orders', (req, res)=>{
  res.json({results:[
    {
      "id": 19,
      "size": "grande",
      "date": "2019-03-21 13:19:28.626061",
      "drink_id": 1,
      "customer_id": 1
    },
    {
      "id": 20,
      "size": "a drop",
      "date": "2019-03-21 13:19:28.626061",
      "drink_id": 3,
      "customer_id": 1
    },
    {
      "id": 21,
      "size": "barrel of",
      "date": "2019-03-21 13:19:28.626061",
      "drink_id": 4,
      "customer_id": 2
    },
    {
      "id": 22,
      "size": "spoonful",
      "date": "2019-03-21 13:19:28.626061",
      "drink_id": 2,
      "customer_id": 2
    },
    {
      "id": 23,
      "size": "cup",
      "date": "2019-03-21 13:19:28.626061",
      "drink_id": 2,
      "customer_id": 3
    },
    {
      "id": 24,
      "size": "enough to fit in the palm of your hands",
      "date": "2019-03-21 13:19:28.626061",
      "drink_id": 3,
      "customer_id": 3
    },
    {
      "id": 25,
      "size": "grande",
      "date": "2019-07-26 13:20:40.304351",
      "drink_id": 1,
      "customer_id": 1
    },
    {
      "id": 26,
      "size": "a drop",
      "date": "2019-07-26 13:20:40.304351",
      "drink_id": 3,
      "customer_id": 1
    },
    {
      "id": 27,
      "size": "barrel of",
      "date": "2019-07-26 13:20:40.304351",
      "drink_id": 4,
      "customer_id": 2
    },
    {
      "id": 28,
      "size": "spoonful",
      "date": "2019-07-26 13:20:40.304351",
      "drink_id": 2,
      "customer_id": 2
    },
    {
      "id": 29,
      "size": "cup",
      "date": "2019-07-26 13:20:40.304351",
      "drink_id": 2,
      "customer_id": 3
    },
    {
      "id": 30,
      "size": "20oz",
      "date": "2019-07-26 13:20:40.304351",
      "drink_id": 1,
      "customer_id": 1
    },
    {
      "id": 31,
      "size": "boatloads",
      "date": "2019-07-26 13:20:40.304351",
      "drink_id": 3,
      "customer_id": 1
    },
    {
      "id": 32,
      "size": "teaspoon",
      "date": "2019-07-26 13:20:40.304351",
      "drink_id": 4,
      "customer_id": 2
    },
    {
      "id": 33,
      "size": "tinsy amount of",
      "date": "2019-07-26 13:20:40.304351",
      "drink_id": 2,
      "customer_id": 2
    },
    {
      "id": 34,
      "size": "bowl",
      "date": "2019-07-26 13:20:40.304351",
      "drink_id": 2,
      "customer_id": 3
    },
    {
      "id": 35,
      "size": "enough to fit in the palm of your hands",
      "date": "2019-07-26 13:20:40.304351",
      "drink_id": 3,
      "customer_id": 3
    }
  ]});
})


app.get('*', (req, res)=>{
  res.status(404);
  res.sendFile('./404.html', {root: __dirname });
})
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})



// res.statusMessage = "Current password does not match";
//     res.status(400).end();