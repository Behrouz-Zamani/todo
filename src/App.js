import React, { Fragment, useState } from 'react';
import TopForm from './TopForm';
import TaskList from './TaskList';
import { taskContext } from './taskContext';

const App = () => {
    const [taskItem, setTaskItem] = useState([
        {
            id: 1,
            title: "Work # 1",
            done:true
        },
        {
            id: 2,
            title: "Work # 2",
            done:false
        },
        {
            id: 3,
            title: "Work # 3",
            done:true
        },
        {
            id: 4,
            title: "Work # 4",
            done:false
        },
    ])

    return (
        <div className='container w-100 h-100 p-3'>
            <div className='row h-100 justify-content-center align-align-items-start'>
                <div className='col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit'>
            <taskContext.Provider value={{
                taskItem,
                setTaskItem
            }}>
               <TopForm />
                <TaskList />
            </taskContext.Provider>
            </div>
            </div>
        </div>
    )
}

export default App;
