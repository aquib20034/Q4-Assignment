import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteAll ,fnFilterTodo,fnAllTodo} from '../actions';
import List from './list'
import { v4 as uuid } from 'uuid';
import "./list.css";


const Todo = () => {
    const [inputData, setInputData] = useState();
    const [filterTodo, setFilterTodo] = useState(true);

    const list = useSelector((val) => {
        return val.todoReducer.todoList
    })
    const dispatch = useDispatch();
    const handleTodo = (task) => {
        try {
            if (!task) throw "Empty Field"
            const payload = {
                status: true,
                title: task,
                id: uuid()
            }
            const action = addTodo(payload);
            dispatch(action);
            console.log("payload", payload)
        }
        catch (error) {
            console.log("error", error)
        }
    }

    const handleFilter = () => {
        console.log(filterTodo);
        try {
            
            const payload = {
                filter: filterTodo
            }


            
            const action = fnFilterTodo(payload);
       
            dispatch(action);
            setFilterTodo(!(filterTodo));
           
        }
        catch (error) {
            console.log("error", error)
        }
    }


        return (
        <div>
            <div>
                <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <button onClick={() => handleTodo(inputData)}>
                    Add Todo
                </button>
                <br/>
                <button onClick={()=> dispatch(deleteAll())}>
                    Delete All
                </button>

                <button onClick={()=> dispatch(fnAllTodo())}>
                    All Todo
                </button>

                <button onClick={()=> handleFilter() }>
                   {filterTodo ? "Active": "Inactive"}
                </button>
            </div>
            {
                list.map((item) => {
                    return (
                        <List data={item} />
                    )
                })
            }
        </div>
    )
}

export default Todo