const express = require('express');
const { createtodoSchema, updatetodoSchema } = require('./types');
const { todo } = require('./db');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

app.post('/todo', async (req, res)=> {
  const createPayload = req.body;
  const parsedPayload = createtodoSchema.safeParse(createPayload);
  if(!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong data"
    });
    return;
  }
 await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false
  })
  res.json({
    msg: "Todo created successfully"
  })
});

app.get('/todos', async (req, res)=> {
  const todos = await todo.find({});
  res.json({
    todos
  });  
});

app.put('/completed', async (req, res)=> {
  const updatePayload = req.body;
  const parsedPayload = updatetodoSchema.safeParse(updatePayload);
  if(parsedPayload.success) {
    res.send('Todo updated successfully');
  } else {
    res.status(411).json({
      msg: "You sent the wrong data"
    });
  }
  await todo.update({
    _id: req.body.id
  },
    {
    completed: true
  });
  res.json({
    msg: "Todo marked as completed" 
  })
});

app.listen(3000, ()=> {
  console.log('Server is running on http://localhost:3000')
})