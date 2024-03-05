import { React, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Form from 'react-bootstrap/Form';
import AssignedTasks from './AssignedTasks';
import Pagination from 'react-bootstrap/Pagination';
import UnassignedTasks from './UnassignedTasks';
import { viewTasksUnassigned, viewTasksAssigned } from '../api/endpoints'
import toast from 'react-hot-toast';
import Spinner from 'react-bootstrap/Spinner';
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




    // Logic


    const [unassignedTask, setunassignedTask] = useState([]);
    const [assigned, setassigned] = useState([]);

    useEffect(() => {
        const userdata = localStorage.getItem('empdetails');
        console.log("userdata", JSON.parse(userdata)?.id)

        viewTasksUnassigned(JSON.parse(userdata)?.id).then((d) => {
            setunassignedTask(d.data)
        }).catch(err => {
            toast.error(err)
        })


        viewTasksAssigned(JSON.parse(userdata)?.id).then((d) => {
            setassigned(d.data)
        }).catch(err => {
            toast.error(err)
        })

    }, [])





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
                                {unassignedTask?.length ? unassignedTask.map((l, index) => {
                                    return (
                                        <UnassignedTasks prop={l} />
                                    )
                                }) : (
                                    <div className='assign-child2'>
                                        <div><Spinner animation="border" variant="success" /></div>
                                        <div>Loading...</div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div>
                                {assigned?.length ? assigned.map((l, index) => {
                                    return (
                                        <AssignedTasks prop={l} />
                                    )
                                }) : (
                                    <div className='assign-child2'>
                                        <div><Spinner animation="border" variant="success" /></div>
                                        <div>  Loading...</div>
                                    </div>
                                )}
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
