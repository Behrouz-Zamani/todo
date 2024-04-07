import React, { useContext } from "react";
import TopForm from "./TopForm";
import { taskContext } from "./taskContext";

const TaskList = () => {
    const { taskItem, settaskItem } = useContext(taskContext);
    return (
        <div className='container w-100 h-100 p-3'>
            <div className='row h-100 justify-content-center align-align-item-start'>
                <div className='col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 h_fit'>
                    <TopForm />
                    <ul className='list-group M-0 P-0 MT-2'>
                        {
                            taskItem.map(t => (
                                <li className={`list-group-item d-flex justify-content-between ${t.done ? "list-group-item-success" : ""}`}>
                                    {t.title}
                                    <span>
                                        {
                                            t.done ? (
                                            <i className='me-3 poimer fas fa-times text-warning transition_200 text_hover_shadow'></i>) :
                                             (<i className='me-3 poimer fas fa-check text-success transition_200 text_hover_shadow'></i>
                                             )
                                        }
                                        <i className='me-3 poimer fas fa-trash text-danger transition_200 text_hover_shadow'></i>
                                    </span>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TaskList