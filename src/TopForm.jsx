import React, { useContext, useState } from "react";
 import { taskContext } from "./taskContext";


const TopForm = () => {

const[task,setTask] = useState("")
const { taskItem, setTaskItem } = useContext(taskContext);

const handleSettask = (event)=>{
    setTask(event.target.value)
}
const handleAddTask = (event) => {
    event.preventDefault()
    setTaskItem([...taskItem , {id:Math.random() , title:task , done:false}])
}
    return (

        <>
            <h4 className="text-center text-info textshdow">
                Wellcome To mini React project
            </h4>
            <form  onSubmit={handleAddTask}>
                <div className="form-group d-flex">
                    {/* {task} */}
                    <input type="text" className="form-control" value={task} onChange={handleSettask} />
                    <button type="submit" className="btn btn-success ms-1" >Save</button>
                </div>
            </form>
        </>
    );
}
export default TopForm