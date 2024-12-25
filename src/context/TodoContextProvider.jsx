import React, { useState } from 'react'
import TodoContext from './TodoContext'

function TodoContextProvider({ children }) {
    const [todos, setTodos] = useState([])

    const addTodo = (text) => {
        if (!text) return null

        const todo = {
            todoText: text,
            isCompleted: false,
            id: Date.now()
        }

        setTodos((prev) => {
            return [
                ...prev, todo
            ]
        })
    }
    const updateTodo = (id, newText) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, todoText: newText } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    
    const toggleComplete = (id) => {
        setTodos((todos) => todos.map((todo) => todo.id ===
      id ? {...todo, isCompleted: !todo.isCompleted} : todo))
      }

    return (
        <TodoContext.Provider value={{ addTodo, todos, deleteTodo, updateTodo, toggleComplete}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider
