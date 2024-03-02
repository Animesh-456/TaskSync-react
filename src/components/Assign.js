import { React, useState } from 'react'
import Sidebar from './Sidebar'
import Form from 'react-bootstrap/Form';
import AssignedTasks from './AssignedTasks';
import Pagination from 'react-bootstrap/Pagination';
import UnassignedTasks from './UnassignedTasks';
const Assign = () => {

    const v = [
        {
            a: "Task One"
        },
        {
            a: "Task Two"
        },
        {
            a: "Task Three"
        },
        {
            a: "Task Four"
        },
        {
            a: "Task Five"
        },
    ]



    const b = [
        {
            a: "Task Another"
        },
        {
            a: "Task Two"
        },
        {
            a: "Task Three"
        },
        {
            a: "Task Four"
        },
        {
            a: "Task Five"
        },
    ]


    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }


    const [selectValue, setSelectValue] = useState('Unassigned');

    // Event handler to update the select value
    const handleSelectChange = (event) => {
        setSelectValue(event.target.value);
    };



    return (
        <div className='dashboard-main-container'>
            <Sidebar />
            <div className='assign-task-container'>
                <div className='asgn'>
                    <div className='assign-child'>
                        <div>
                            <h4>Filter Results</h4>
                        </div>

                    </div>

                    <div className='assign-child'>
                        <div>
                            <select value={selectValue} onChange={handleSelectChange}>
                                <option value="Unassigned">
                                    Unassigned
                                </option>
                                <option value="Assigned">
                                    Assigned
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className='assign-child'>

                        {selectValue == "Unassigned" ? (
                            <div>
                                {v.map((l, index) => {
                                    return (
                                        <UnassignedTasks prop={l?.a} />
                                    )
                                })}
                            </div>
                        ) : (
                            <div>
                                {b.map((l, index) => {
                                    return (
                                        <AssignedTasks prop={l?.a} />
                                    )
                                })}
                            </div>
                        )}
                    </div>

                    <div className='assign-child'>
                        <div>
                            <Pagination>{items}</Pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assign
