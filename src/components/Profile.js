import { React, useState } from 'react'
import Sidebar from './Sidebar'
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import PendingTaks from './PendingTaks';
import CompletedTasks from './CompletedTasks';

import Card from 'react-bootstrap/Card';
import RecentTasks from './RecentTasks';
import { Button } from 'react-bootstrap';


const Profile = () => {

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


    const [selectValue, setSelectValue] = useState('Pending');

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
                            <h4>Profile Details</h4>
                        </div>
                    </div>

                    <div className='assign-child2'>

                        <div>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>

                        <div>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>


                    </div>

                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control disabled readOnly value={'anim29006@gmail.com'} type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Type of account</Form.Label>
                            <Form.Select disabled>
                                <option>Assigner</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>



                    </Form>




                    <div className='assign-child'>
                        <div>
                            <Button variant='outline-primary'>Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
