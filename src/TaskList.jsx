import React, { useContext } from "react";
import { taskContext } from "./taskContext";

const TaskList = () => {
    const { taskItem, setTaskItem } = useContext(taskContext);
    //#region  handler

    const handleSetDoneTask = (id) => {
        const index = taskItem.findIndex(t => t.id === id);
        let newTaskItems = [...taskItem]
        newTaskItems[index].done = !newTaskItems[index].done;
        setTaskItem(newTaskItems);
    }

    const handleDeletetask = (id) => {
        let newTasks = taskItem.filter(t => t.id !== id);
        setTaskItem(newTasks);
    }
    //#endregion
    if (taskItem.length) {
        return (

            <ul className='list-group M-0 P-0 MT-2'>
                {
                    taskItem.map(t => (
                        <li className={`list-group-item d-flex justify-content-between ${t.done ? "list-group-item-success" : ""}`}>
                            {t.title}
                            <span>
                                {
                                    t.done ? (
                                        <i className='me-3 poimer fas fa-times text-warning transition_200 text_hover_shadow' onClick={() => { return handleSetDoneTask(t.id) }}></i>) :
                                        (<i className='me-3 poimer fas fa-check text-success transition_200 text_hover_shadow' onClick={() => { return handleSetDoneTask(t.id) }}></i>
                                        )
                                }
                                <i className='me-3 poimer fas fa-trash text-danger transition_200 text_hover_shadow' onClick={() => { handleDeletetask(t.id) }}></i>
                            </span>
                        </li>
                    ))
                }

            </ul>

        )
    } else {
        return (
            <h4 className="text-center text-danger">No Work Saved!</h4>
        )

    }

}

export default TaskList