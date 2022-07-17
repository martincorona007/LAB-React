import React, { Fragment, useRef, useState } from "react";
//import './App.css';
type FormElement = React.FormEvent<HTMLFormElement>; //change the name to short name

interface ITask {
  //type of data for the task
  name: string;
  done: boolean;
}
function App() {
  const [newTask, setnewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]); //
  const taskInput = useRef<HTMLInputElement>(null);//cursor focus on the input
  //                                   | a list of ITask [{},{}]
  const handleconst = (e: FormElement) => {
    e.preventDefault(); //avoid rendering
    console.log("Sumbiting");
    addTask(newTask);
    setnewTask("");
    taskInput.current?.focus();
    console.log("p1 ", tasks);
  };

  const addTask = (name: string) => {
    //                          |content tasks ,{new object inside of the list}
    const newTasks: ITask[] = [...tasks, { name, done: false }]; //list  1 [,{name: 'd1,done:false}] 2 [{name: 'd1,done:false},{name: 'd2,done:false}]
    //                        |                          | = immutable
    setTasks(newTasks);
    //  console.log("p2 ",tasks);
  };
  const toggleDoneTask = (i: number) => {
    const newTasks: ITask[] = [...tasks]; //get the object tasks
    newTasks[i].done = !newTasks[i].done; //change the value false to true
    setTasks(newTasks);
  };
  const removeTask = (i: number) => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i,1);
    setTasks(newTasks)
  };
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleconst}>
                <input
                  type="text"
                  onChange={(e) => setnewTask(e.target.value)}
                  value={newTask}
                  className="form-control"
                  ref={taskInput}
                  autoFocus
                ></input>
                <button className="btn btn-success btn-block mt-2">Save</button>
              </form>
            </div>
          </div>

          {
            //multiples divs creating  => (avoid the return === ())
            tasks.map((t: ITask, i: number) => (
              <div className="card card-body mt-2" key={i}>
                <h2 style={{ textDecoration: t.done ? "line-through" : "" }}>
                  {t.name}
                </h2>
                <div>
                  <button
                    className="btn  btn-secondary"
                    onClick={() => toggleDoneTask(i)}
                  >
                    {t.done ? "✓" : "ⓧ"}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeTask(i)}
                  >
                    🗑
                  </button>
                </div>
                {/* <p>{t.done + ''}</p> */}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
