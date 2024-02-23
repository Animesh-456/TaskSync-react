import React from 'react'
import Sidebar from './Sidebar'
import Form from 'react-bootstrap/Form';
const Assign = () => {
    return (
        <div className='dashboard-main-container'>
            <Sidebar />
            <div className='assign-task-container'>
                <div className='assign-child'>
                    <div>
                        <h4>Filter Results</h4>
                    </div>
                </div>

                <div className='assign-child'>
                    <div>
                        <select>
                            <option>
                                Unassigned
                            </option>
                            <option>
                                Assigned
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assign
