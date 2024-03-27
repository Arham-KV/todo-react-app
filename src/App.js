// import React, { useState, useEffect } from 'react';
import { } from "./App.css";

// const App = () => {
//   const [tasks, setTasks] = useState([]);
//   const [selectedDate, setSelectedDate] = useState(getCurrentDate());


//   useEffect(() => {
//     displayTasks(selectedDate);
//   }, [selectedDate]);

//   function getCurrentDate() {
//     const now = new Date();
//     const year = now.getFullYear();
//     let month = (now.getMonth() + 1).toString();
//     let day = now.getDate().toString();
//     month = month.length === 1 ? '0' + month : month;
//     day = day.length === 1 ? '0' + day : day;
//     return `${year}-${month}-${day}`;
//   }

//   function getTasksForDate(date) {
//     let tasks = localStorage.getItem(date);
//     return tasks ? JSON.parse(tasks) : [];
//   }

//   function saveTasksForDate(date, tasks) {
//     localStorage.setItem(date, JSON.stringify(tasks));
//   }

//   function addTask() {
//     let taskInput = document.getElementById("taskInput").value;

//     if (taskInput !== "") {
//       let tasks = getTasksForDate(selectedDate);
//       tasks.push({ task: taskInput, completed: false });
//       saveTasksForDate(selectedDate, tasks);
//       displayTasks(selectedDate);
//       document.getElementById("taskInput").value = "";
//       document.getElementById("successMessage").innerText = "Task Created Successfully";
//       setTimeout(() => {
//         document.getElementById("successMessage").innerText = "";
//       }, 2000);
//     } else {
//       alert("Please enter task!");
//     }
//   }

//   function toggleTask(index) {
//     let newTasks = [...tasks];
//     newTasks[index].completed = !newTasks[index].completed;
//     setTasks(newTasks);
//     saveTasksForDate(selectedDate, newTasks);
//     displayTasks(selectedDate);
//   }

//   function deleteTask(index) {
//     let newTasks = [...tasks];
//     newTasks.splice(index, 1);
//     setTasks(newTasks);
//     saveTasksForDate(selectedDate, newTasks);
//     displayTasks(selectedDate);
//     document.getElementById("deleteMessage").innerText = "Task Deleted Successfully";
//     setTimeout(() => {
//       document.getElementById("deleteMessage").innerText = "";
//     }, 2000);
//   }

//   function displayTasks(date) {
//     let tasks = getTasksForDate(date);
//     setTasks(tasks);
//   }

//   return (
//     <div>
//       <div className='message'>
//         <p id="successMessage" className='success' ></p>
//         <p id="deleteMessage" className='delete-msg'></p>
//       </div>
//       <div className="container">
//         <div className="to-do-list">
//           <div className="to-list-part">

//             <div className="input-part">
//               <h2>Todo List</h2>
//               <input type="date" id="datePicker" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
//             </div>
//             <div className="btn-part">
//               <input type="text" id="taskInput" placeholder="Enter task" />
//               <button onClick={addTask}
//                 className='add'
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 >
//                   <path d="M12 5v14M5 12h14"></path>
//                 </svg>
//                 Add Task</button>
//             </div>
//             <div id="taskList">
//               {tasks.length === 0 ? (
//                 <div>Task is not defined for this date.</div>
//               ) : (
//                 tasks.map((task, index) => (
//                   <div key={index}>
//                     <input type="checkbox" checked={task.completed} onChange={() => toggleTask(index)} className='checkbox-container' />
//                     <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.task}</label>
//                     <button onClick={() => deleteTask(index)}
//                       className='delete'
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         stroke-width="2"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       >
//                         <circle cx="12" cy="12" r="10"></circle>
//                         <line x1="15" y1="9" x2="9" y2="15"></line>
//                         <line x1="9" y1="9" x2="15" y2="15"></line>
//                       </svg>
//                     </button>
//                   </div>
//                 ))
//               )}
//             </div>
//             <h4>© 2024 syedarhamhaider . All Rights Reserved.</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());

  useEffect(() => {
    displayTasks(selectedDate);
  }, [selectedDate]);

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    let month = (now.getMonth() + 1).toString();
    let day = now.getDate().toString();
    month = month.length === 1 ? '0' + month : month;
    day = day.length === 1 ? '0' + day : day;
    return `${year}-${month}-${day}`;
  }

  function getTasksForDate(date) {
    let tasks = localStorage.getItem(date);
    return tasks ? JSON.parse(tasks) : [];
  }

  function saveTasksForDate(date, tasks) {
    localStorage.setItem(date, JSON.stringify(tasks));
  }

  // function addTask() {
  //   let taskInput = document.getElementById("taskInput").value;

  //   if (taskInput !== "") {
  //     let tasks = getTasksForDate(selectedDate);
  //     tasks.push({ task: taskInput, completed: false });
  //     saveTasksForDate(selectedDate, tasks);
  //     displayTasks(selectedDate);
  //     document.getElementById("taskInput").value = "";
  //     document.getElementById("successMessage").innerText = "Task Created Successfully";
  //     setTimeout(() => {
  //       document.getElementById("successMessage").innerText = "";
  //     }, 2000);
  //   } else {
  //     alert("Please enter task!");
  //   }
  // }

  function addTask() {
    let taskInput = document.getElementById("taskInput").value;

    if (taskInput === "") {
      // Add validation
      document.getElementById("emptyMessage").innerText = "Please enter a task";
      return;
    } else {

      // Task is entered

      // Hide validation message
      document.getElementById("emptyMessage").innerText = "";

    }

    let tasks = getTasksForDate(selectedDate);
    tasks.push({ task: taskInput, completed: false });
    saveTasksForDate(selectedDate, tasks);

    displayTasks(selectedDate);

    document.getElementById("taskInput").value = "";

    document.getElementById("successMessage").innerText = "Task Created Successfully";

    setTimeout(() => {
      document.getElementById("successMessage").innerText = "";
    }, 2000);

  }

  function toggleTask(index) {
    let newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    saveTasksForDate(selectedDate, newTasks);
    displayTasks(selectedDate);
  }

  function deleteTask(index) {
    let newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    saveTasksForDate(selectedDate, newTasks);
    displayTasks(selectedDate);
    document.getElementById("deleteMessage").innerText = "Task Deleted Successfully";
    setTimeout(() => {
      document.getElementById("deleteMessage").innerText = "";
    }, 2000);
  }

  function displayTasks(date) {
    let tasks = getTasksForDate(date);
    setTasks(tasks);
  }

  return (
    <div>
      <div className='message'>
        <p id="successMessage" className='success'></p>
        <p id="deleteMessage" className='delete-msg'></p>
      </div>
      <div className="container">
        <div className="to-do-list">
          <div className="to-list-part">

            <div className="input-part">
              <h2>Todo List</h2>
              <input type="date" id="datePicker" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

            </div>
            <div className="btn-part">
              <input type="text" id="taskInput" placeholder="Enter task" />

              <button onClick={addTask} className='add'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14"></path>
                </svg>
                Add Task
              </button>
            </div>
            <p id="emptyMessage" className='success empty'></p>

            {/* <div id="taskList">
              {tasks.length === 0 ? (
                <div>Task is not defined for this date.</div>
              ) : (
                tasks.map((task, index) => (
                  <div key={index}>
                    <input type="checkbox" checked={task.completed} onChange={() => toggleTask(index)} className='checkbox-container' />
                    <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.task}</label>
                    <button onClick={() => deleteTask(index)} className='delete'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div> */}
            <div id="taskList">
              {tasks.map((task, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(index)}
                    className='checkbox-container'
                  />

                  <label
                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                  >
                    {task.task}
                  </label>

                  <button onClick={() => deleteTask(index)} className='delete'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </button>

                </div>
              ))}
            </div>
            <h4>© 2024 syedarhamhaider . All Rights Reserved.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;