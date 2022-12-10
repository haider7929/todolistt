import React, {useEffect} from 'react'
import { v4 as uuidv4 } from "uuid";

const Forms = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const updateTodo = (title,id,completed)=>{
        const newTodo = todos.map((todo)=>{
            todo.id === id ? {title,id,completed} : todo
        })

        setTodos(newTodo);
        setEditTodo("");
    };
    useEffect(() =>{
        if(editTodo){
            setInput(editTodo.title)
        }else{
            setInput('')
        }
    })
    const onFormSubmit = (event) => {
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
        setInput('');
        }else{
            updateTodo(input,editTodo.id, editTodo.completed)
        }
        

    };
    return (
        <form onSubmit={onFormSubmit}>
            <input type="text"
                placeholder='Enter a Todos.....'
                className='task-input'
                value={input}
                required
                onChange={onInputChange}
            />
            <button className='button-add' type='submit'>Add</button>
        </form>
    )
}

export default Forms;