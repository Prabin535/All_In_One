import React from "react";
import { useState } from "react";
import { useRef } from "react";
import BackBtn from "../BackBtn";


const TaskReminder = () => {
  let [todo, setTodo] = useState("");
  let [task, setTask] = useState([]);
  let [i, setI] = useState("");
  let todoo = useRef();
  function submitTodo(e) {
    e.preventDefault();
    if (typeof i == "string") {
      if (todo) {
        setTask([...task, {name : todo,status : false}]);
      }
    }

    setI("");
    setTodo("");
  }

  function deleteTask(i) {
    setTask(task.filter((item, index) => index !== i));
  }

  function editTask(i) {
    setI(i);
    let remainedValue = task.filter((item, index) => index !== i);
    let value = task.filter((item, index) => index === i);
    setTask(remainedValue);
    setTodo(value[0].name);
    todoo.current.focus();
  }
  function submitTask() {
    if (typeof i == "number") {
      task.splice(i, 0, {name:todo,status:false});
      setTask([...task]);
    }

    todoo.current.focus();
  }
  function approvedTask(i) {
    task[i].status = true;
    setTask([...task]);
  }
  return (
    <div className="section1b">
      <BackBtn back={'/'} />
      <div className="todoSection">
      <>
        <form onSubmit={submitTodo}>
          <div className="inputTodo">
            <input
              type="text"
              className="inputTag"
              placeholder="Enter Task Here"
              ref={todoo}
              value={todo}
              onChange={({target}) => {
                setTodo(target.value);
              }}
            />
          </div>
          <div className="btnTodo">
            <button type="submit" className="submitBtn" onClick={submitTask}>
              Submit
            </button>
          </div>
        </form>
      </>
      <ul className={task[0] ? "displayTask" : "noTask"}>
        {task.map((item, index) => {
          return (
            <li key={index} style={{textDecoration : item.status ? "line-through":"none" }}>
              <div className="item">
                {item.name}
              </div>

              {item.status || <div className="buttons">
                <button
                  className="approvedBtn"
                  onClick={() => approvedTask(index)}
                >
                  Approved
                </button>
                <button className="editBtn" onClick={() => editTask(index)}>
                  Edit
                </button>
                <button className="deleteBtn" onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </div>
        }
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default TaskReminder