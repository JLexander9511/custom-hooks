import { todoReducer } from "./todoReducer"
import { useEffect, useReducer } from "react"

export const useTodo =  () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, JSON.parse(localStorage.getItem('initialState')))

    const handleAddTodo = (e, todo) => {    
        e.preventDefault()
        if(todo == '') return

        const payload = {
            id: todos.length + 1,
            todo: todo,
            done: false
        }

        dispatchTodo({
            type: 'addTodo',
            payload
        })
    }

    const handleRemoveTodo = (id) => {
        dispatchTodo({
            type: 'removeTodo',
            payload: id
        })
    }

    const handleTodoStatus = (doneStatus, id) => {
        dispatchTodo({
            type: 'changeTodoStatus',
            payload: id
        })
    }

    let todosCount = todos.length
    let pendingTodosCount = todos.filter( todo => !todo.done ).length

    useEffect(() => {
        localStorage.setItem('initialState', JSON.stringify(todos))
    }, [todos])

    return{
        todos,
        handleAddTodo,
        handleRemoveTodo,
        handleTodoStatus,
        todosCount,
        pendingTodosCount
    }
}