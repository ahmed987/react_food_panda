
const reducer = (state = {todos: []}, action) => {
    switch(action.type) {
        case "UPDATE_TODOS": {
            return {...state, todos: action.payload}
        }
        default: {
            return state;
        }
    }
}

export default reducer;