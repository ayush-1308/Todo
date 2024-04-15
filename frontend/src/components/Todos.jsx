import React from 'react'

const Todos = ({todos}) => {

  const handleCompleted = (id) => {
    fetch("http://localhost:3000/completed",
    {
      method: "PUT",
      body: JSON.stringify({
        id: id
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then( async (res) => {
      const data = await res.json()
      alert("Todo marked as completed!")
      console.log(data)
    })
  }

  return (
    <div>
      {todos.map(function(todo){
        return <div>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button onClick={ handleCompleted }>{todo.completed == true ? "Completed" : " Mark as completed"}</button>
        </div>
      })}
    </div>
)}

export default Todos