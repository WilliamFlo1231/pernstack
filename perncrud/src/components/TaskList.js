import { Button, Card, CardContent, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

export default function TaskList() {

  const [tasks, setTasks] = useState([])

  const loadTasks = async () => {
    const response = await fetch('http://localhost:3000/tasks')
    const data = await response.json()
    setTasks(data)
  }

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE"
    })
    setTasks(tasks.filter(task => task.id !== id))
   }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <>
      <h1>Task List</h1>
      {
        tasks.map((task, i) => (
          <Card key={i} style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e"
          }}>
            <CardContent style={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <div style={{color: 'white'}}>
                <Typography>{task.title}</Typography>
                <Typography>{task.description}</Typography>
              </div>

              <div>
                <Button variant='contained' color='inherit' onClick={() => console.log('editing')} style={{marginRight: "0.5rem"}}>
                  Edit
                </Button>
                <Button variant='contained' color='warning' onClick={() => handleDelete(task.id)}>
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))
      }
    </>
  )
}
