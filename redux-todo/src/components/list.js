import React, { useState } from 'react'
import { deleteTodo, editTodo,updateStatus } from '../actions';
import { useDispatch } from 'react-redux'
import './list.css'

const List = ({ data }) => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState();
    const [editState, setEditState] = useState(false);

    console.log("data", data)

    const handleEdit = (task) => {
        try {
            if (!task) throw "Empty Field"
            const payload = {
                title: task,
                id: data.id
            }
            const action = editTodo(payload);
            dispatch(action);
            console.log("payload", payload)
            setEditState(false)
        }
        catch (error) {
            console.log("error", error)
        }
    }
    return (
        <div>
            <div className='box'>
            <div className='title'>
                {data.title}
                </div>
              
                <div className='actions'>
                    <button onClick={() => dispatch(updateStatus(data.id)) }>
                        { data.status ? "Active": "Inactive" }
                    </button>
                            
                
                    <button onClick={() => dispatch(deleteTodo(data.id))}>
                        Delete
                    </button>
                    <button onClick={() => setEditState(!editState)}>
                        edit
                    </button>
                    {
                        editState ?
                            <>
                                <input type ="text" value={inputData}
                                    onChange={(e) => setInputData(e.target.value)} />
                                <button onClick={() => handleEdit(inputData)}>
                                    Submit
                                </button>
                            </>
                            : ""
                    }   
                </div>
            </div>
        </div>
    )
}

export default List