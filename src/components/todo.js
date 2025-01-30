import React, { useState } from 'react';

const Todo = () => {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = (e) => setToDo(e.target.value);
    const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
        return;
    }
    setToDos((prev) => [toDo, ...prev]);
    setToDo("");
    };
    console.log(toDos);

    return (
    <div>
        <h1>To Do List ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
        <input 
        type="text" 
        value={toDo} 
        onChange={onChange}
        placeholder="Write your to do..." />
        <button type="submit" value="Add">Add To Do</button>
        </form>
        <hr />
        <ul>
        {toDos.map((toDo, index) => (
            <li key={index}>{toDo}</li>
        ))}
        </ul>
    </div>
    );
};

export default Todo;