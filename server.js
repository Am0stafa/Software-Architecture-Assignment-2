const path = require('path');
const express = require('express');
const app = express();

const userRouter = require('./routes/userRouter.js');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.static('public'));



app.get('/', (req,res) => {
  res.render('index', {
    title: "Software Design & Architecture",
    name: "Dr. Amr Desouky - Assignment #2"
  });
});

app.use('/users',userRouter);


// app.get('/users' , (req,res) => {
//   res.render('users');
// });


// app.get('/users/data', (req,res) => {

//   let data = fs.readFileSync('./fixtures/users.json');
//   let users = JSON.parse(data);
//   console.log(users);
  
//   return res.json({
//     users
//   })
// })

// middleware to catch non-existing routes
app.use((req, res, next) => {
  res.status(404).render('404');
});


app.listen('3000', () => {
  console.log('[OK] => HTTP Server listening on http://localhost:3000');
});
