import { React, useState } from 'react'
import Sidebar from './Sidebar'
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import PendingTaks from './PendingTaks';
import CompletedTasks from './CompletedTasks';

import Card from 'react-bootstrap/Card';
import RecentTasks from './RecentTasks';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Dash = () => {

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
        <>
            <div className='dashboard-main-container'>
                <Sidebar />
                <div className='assign-task-container'>
                    <div className='asgn'>
                        <div className='assign-child'>
                            <div>
                                <h4>Account Details</h4>
                            </div>

                            <a href='/addtask' className='plus-sign'>
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
                                    </svg>
                                    <div>
                                        <h6>Add Task</h6>
                                    </div>
                               
                            </a>
                        </div>

                        <div className='assign-child2'>
                            <div>
                                <Card style={{ width: '20rem', height: '7rem' }}>
                                    <Card.Body>
                                        <Card.Title>My name</Card.Title>
                                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                        <Card.Text>
                                            Animesh Mondal
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>

                            <div>
                                <Card style={{ width: '20rem', height: '7rem' }}>
                                    <Card.Body>
                                        <Card.Title>My Email</Card.Title>
                                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                        <Card.Text>
                                            anim29006@gmail.com
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>


                            <div>
                                <Card style={{ width: '20rem', height: '7rem' }}>
                                    <Card.Body>
                                        <Card.Title>Type of Account</Card.Title>
                                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                        <Card.Text>
                                            Assigner
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>


                        </div>


                        <div className='assign-child'>
                            <div>
                                <h4>Recent Tasks</h4>
                            </div>

                        </div>
                        <br></br>

                        <div className='assign-child'>


                            <div>
                                {v.map((l, index) => {
                                    return (
                                        <RecentTasks prop={l?.a} />
                                    )
                                })}
                            </div>

                        </div>

                        <div className='assign-child'>
                            <div>
                                <Button variant='outline-primary'>View More</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dash
