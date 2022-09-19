const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/getAllTodos', (req, res) => {
  res.send([{
    title: 'Todo 1',
    id: 1,
    completed: false
  },
  {
    title: 'Todo 2',
    id: 2,
    completed: false
  }]
)
});
app.listen(2200, () => {
  console.log('listening to the port no 2200');

});
