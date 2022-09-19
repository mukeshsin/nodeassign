const { response } = require('express');
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



// start step2 here
app.get('/todo/1', (req, res) => {
    res.send({
        title: 'Todo 1',
        id: 1,
        completed: false
    })
  });

  app.listen(2500, () => {
    console.log('listening to the port no 2500');
 });


 //start step3 update todo. in case of update  website server responding payload and postman  respond updatetodo.alldone 
 app.put('/todo/1', (req, res) => {
    res.send(
        {
            title: 'Updated Title',
            id: 1,
            completed: true
        }
    )
});
  app.listen(3000, () => {
    console.log('listening to the port no 3000');

 });



//start step4 Delete todo
app.delete('/todo/1', (req, res) => {
    res.send(
        'Deleted Successfully'
);
    });
  app.listen(3500, () => {
    console.log('listening to the port no 3500');

 });


 // start step5 Add Todo by post method

 app.post('/addTodo', (req, res) => {
    res.send(
        {
            title: 'Todo Title',
            method:'post',
            id: 1,
            completed: false
        }
    
        
);
    });
  app.listen(4200, () => {
    console.log('listening to the port no 4200');

 });



  




