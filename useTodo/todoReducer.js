
const todoReducer = (initState, action) => {

    switch (action.type) {
        case 'addTodo':
            return [...initState, action.payload]
        
        case 'removeTodo':
            return initState.filter( todo => todo.id != action.payload )

        case 'changeTodoStatus':
            return initState.map( todo => {
                if(todo.id == action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
               return todo 
            });
    
        default:
            return initState

    }

}

const formReducer = (initState, action) => {
    switch (action.type) {
        case 'changeInput':
            return action.inputValue
            break;
    
        default:
            return initState

    }
}

export {
    todoReducer,
    formReducer
}