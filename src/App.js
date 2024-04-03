import React from 'react';
import TopForm from './TopForm';


const App =() => {

    return (

        <div className='container w-100 h-100 p-3'>
            <div className='row h-100 justify-content-center align-align-item-start'>
                <div className='col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 h_fit'>
                    <TopForm/>
                    <ul className='list-group-item d-flex justify-content-between'>
                        Worke #1
                        <span>
                            <i className='me-3 poimer fas fa-check text-success transition_200 text_hover_shadow'></i>
                            <i className='me-3 poimer fas fa-check text-warning transition_200 text_hover_shadow'></i>
                            <i className='me-3 poimer fas fa-check text-danger transition_200 text_hover_shadow'></i>
                        </span>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App;
