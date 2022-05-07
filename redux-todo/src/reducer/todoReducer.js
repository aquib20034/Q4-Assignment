const initialState = {
    todoList: [
        {
            title: 'Check One',
            id: "1",
            status: true
        }
    ]

}
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO": {
            return {
                ...state,
                todoList: [...state.todoList, action?.payload]
            }
        }
        case "DELETE_TODO": {
            return {
                ...state,
                todoList: state.todoList.filter((item) => item.id !== action.payload.id)
            }
        }

        case "ALL_TODO": {
            return {
                ...state,
                todoList: [...state.todoList]
            }
        }

        case "FILTER_TODO": {

          return {
              ...state,
              todoList: state.todoList.filter((item) => item.status === action.payload.filter)
          }
        }

     
        
        case "EDIT_TODO": {
            return {
                ...state,
                todoList: state.todoList.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item, title: action.payload.title
                        }
                    }
                    else {
                        return item;
                    }
                })
            }
        }

        case "UPDATE_STATUS": {
            return {
                ...state,
                todoList: state.todoList.map((item) => {
                    if (item.id === action.payload.id) {
                        
                        return {
                            ...item, status:(!( item.status))
                        }
                    }
                    else {
                        return item;
                    }
                })
            }
        }

        case "DELETE_ALL_TODO": {
            return {
                ...state,
                todoList: []
            }
        }
        default: {
            return state
        }
    }
}

export default todoReducer

