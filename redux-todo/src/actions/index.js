export const addTodo = ({ title, id,status }) => ({
    type: "ADD_TODO",
    payload: {
        title,
        id,
        status
    }
})

export const fnFilterTodo = ({ filter }) => ({
    type: "FILTER_TODO",
    payload: {
        filter
    }
})

export const fnAllTodo = () => ({
    type: "ALL_TODO"
})

export const deleteTodo = (id) => ({
    type: "DELETE_TODO",
    payload: {
        id
    }
})

export const deleteAll = () => ({
    type: "DELETE_ALL_TODO"
})


export const editTodo = ({ title, id }) => ({
    type: "EDIT_TODO",
    payload: {
        title,
        id
    }
})

export const updateStatus = (id ) => ({
    type: "UPDATE_STATUS",
    payload: {
        id
    }
})

export const FilterStatus = ({ status }) => ({
    type: "UPDATE_STATUS",
    payload: {
        status
    }
})