// components/TodoList.js
import React from 'react';
import { useSelector } from 'react-redux';

function TodoList() {
    const todos = useSelector((state) => state.todos);

    return (
        <ul>
            {todos.todos.map((todo, index) => (
                <li key={index}>{todo.text}</li>
            ))}
        </ul>
    );
}

export default TodoList;