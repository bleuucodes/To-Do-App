import React from 'react'
import TodoContextProvider from './context/TodoContextProvider'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  return (
    <TodoContextProvider>
          <div className="bg-[#2A004E] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg px-4 py-3 text-white">
                    <h1 className="text-3xl font-bold text-center mb-8 mt-2">Manage your todos</h1>
                    <div className="mb-4">
      <TodoInput />
      </div>
      <TodoList />

      </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
