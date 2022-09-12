import React, { useEffect, useMemo, useState } from "react";

function B(){
  const [count,setCount] = useState(0);
  const [todos,setTodos] = useState([]);
  const calculation = expensiveCalculation(count);
  //const calculation =useMemo(()=> expensiveCalculation(count),[count]) ;

  const increment = () => {
    setCount((c)=> c + 1);
  }
  const addTodo = () => {
    setTodos((t)=> [...t,"NEW TODO"]);
  }
  return(
    <> 
    <div>
      <h2>My Todos</h2>
      {todos.map((todo,index)=> {
        return <p key={index}> {todo} ,{todo.index},{index}</p>
      })}
      <button onClick={addTodo}>Add todo</button>
    </div>
    <hr/>
    <div>
      Count: {count}
      <button onClick={increment}>+</button>
      <h2>Expensive Calculation</h2>
      {calculation}
    </div>
    </>
  )
  
} 
const expensiveCalculation = (num) => {
  console.log("Calculation .... ");
  for(let i = 0; i < 1000000000;i++){
    num+=1;
  }
  return num;
}

export default B;