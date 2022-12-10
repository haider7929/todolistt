import React,{useState} from 'react';


import logo from './logo.svg';
import Forms from './components/Form';
import './App.css';
import todo from './todo';
import Header from './components/Header';
import TodosList from './components/TodosList';


const App = () => {
  const[input,setInput] = useState('');
  const[todos,setTodos] = useState([]);
  const[editTodo, setEditTodo] = useState(null);


  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Forms 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
        </div>

      </div>
    
    </div>
  );
}

export default App;
