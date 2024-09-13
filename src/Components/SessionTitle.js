import React from 'react';
import './SessionTitle.css';

function SessionTitle({title}) {
    return (
        <div className='session-title-div'>
            <hr className='session-horizontal-line'></hr>
            <h1 className='session-header-title'>{title}</h1>
        </div>
    );
}

export default SessionTitle; 
