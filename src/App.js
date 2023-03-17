import React, {useState} from 'react'

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addToDo = (todo) => {
    const newToDo = {
      id: Math.random(),
      todo: todo
    };
    //add to list
    setList([...list, newToDo]);

    //clear input
    setInput("");
  };

  const deleteToDo = (id) => {

    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);

  }

  return (
    <div>
      <h1>ToDo List</h1>
      <input type='text' value= {input} onChange={(a) => setInput(a.target.value)}/>
      <button onClick={() => addToDo(input) }>Add</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteToDo(todo.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App