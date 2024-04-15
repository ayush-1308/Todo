import React, { useState } from 'react'

const CreateTodo = () => {

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

const handleTitleChange = (e) => {
  setTitle(e.target.value)
}

const handleDescriptionChange = (e) => {
  setDescription(e.target.value)
}

  return (
    <>
    <input style={{
      margin: 10,
      padding: 10,
      }}
      onChange={handleTitleChange}
       type="text" placeholder="Title" /><br />
    <input style={{
      margin: 10,
      padding: 10,
      }}
      onChange={handleDescriptionChange}
       type="text" placeholder="Description" /><br />

    <button style={{
      margin: 10,
      padding: 10,
      }}
      onClick={() => {
        fetch("http://localhost:3000/todo/",
        {
          method: "POST",
          body: JSON.stringify({
            title: title,
            description: description
          }),
          headers: {
            "Content-Type": "application/json"
          }  
        }
      )
        .then( async (res) => {
          const data = await res.json()
          alert("Todo added successfully!")
          console.log(data)
        })
      }} 
      >
        Add a todo</button>
    </>
  )
}

export default CreateTodo