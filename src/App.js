import { useState } from 'react'
import TodoList from './components/ToDoList'
import TodoForm from './components/ToDoForm'
// // toDoList with use State

// function App() {

//   //get job from localStorage


//   const [job, setJob] = useState('')
//   // const [jobs, setJobs] = useState(storageJob ??[])

//   const [jobs, setJobs] = useState(() => {
//     const storageJob = JSON.parse(localStorage.getItem('job'))
//     return storageJob
//   })

//   console.log(job)

//   const handleSubmit = () => {
//     setJobs(prev => {
//       const newJobs = [...prev, job]

//       //save to local Storage 
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('job', jsonJobs)
//       return newJobs
//     })
//     setJob('')
//   }

//   return (
//     <div className="App">
//       <input
//         value={job}
//         onChange={e => setJob(e.target.value)}
//       />
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>
//       <button onClick={handleSubmit}>Add</button>
//     </div>
//   );
// }


//-------------------------

//mounted and Unmount

// function App() {

//   const [show, setShow] = useState(false)

//   return (
//     <div>
//       <button onClick={() => { setShow(!show) }}> Toggle</button>
//       <p>
//         {show && <Content />}
//       </p>
//     </div>
//   )
// }
// useEffect (call back)
//- Gọi callback mỗi khi components re-render 
//-Gọi callback sau khi component thêm element vào DOM
//2.useEffect(callback,[])
//- Chỉ gọi callback 1 lần sau khii component mounted 
//3. useEffect(callback,[deps])
//- Callback sẽ được gọi lại mỗi khi dép thay đổi

//useState : change color

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, title: 'hello' },
    { id: 2, title: 'anh' },
    { id: 3, title: 'em' }
  ])


  const handleTodoClick = (todo) => {
    console.log(todo);

    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return


    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  const handleFormSubmit = (formValues) => {
    console.log('value', formValues)
    // add new todo to current todo list 
    const newTodo = {
      id: todoList.length + 1,
      ...formValues
    }
    const newTodoList = [...todoList] //all init todolist
    newTodoList.push(newTodo)
    setTodoList(newTodoList)

  }
  return (
    <div className='app'>
      <TodoForm
        onSubmit={handleFormSubmit}
      />

      <TodoList
        todos={todoList}
        onTodoClick={handleTodoClick}
      />
    </div>
  )
}



export default App;
