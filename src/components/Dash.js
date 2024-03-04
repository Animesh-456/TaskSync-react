import { React, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import PendingTaks from './PendingTaks';
import CompletedTasks from './CompletedTasks';

import Card from 'react-bootstrap/Card';
import RecentTasks from './RecentTasks';
import { Button, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAtom } from 'jotai'
import useratom from '../jotai/atom';

import common from '../helpers/common'
import { getUser, recentTasks, createdrecentTasks, updateemployee } from '../api/endpoints'
import toast from 'react-hot-toast';

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












    // Logic


    const [empdetails, setempdetails] = useState([]);
    const [recenttasks, setrecenttasks] = useState([]);
    const [createdrecent, setcreatedrecent] = useState([]);


    useEffect(() => {
        const userdata = localStorage.getItem('empdetails');
        const token = JSON.parse(userdata);


        getUser(token).then(d => {

            console.log("data is ", d.status)
            setempdetails(d.data)

        }).catch(error => {
            toast.error(error)
        })


        recentTasks(token.id).then(d => {
            if (d.status == 201) {
                setrecenttasks(d.data)
            }
        }).catch(error => {
            toast.error(error)
        })

        createdrecentTasks(token.id).then(d => {
            if (d.status == 201) {
                setcreatedrecent(d.data)
            }
        }).catch(error => {
            toast.error(error)
        })
    }, [])






    console.log("Local str")
    return (
        <>
            <div className='dashboard-main-container'>
                <Sidebar />


                <div className='assign-task-container'>
                    <div className='asgn'>
                        {empdetails && empdetails?.account_type == 'Assigner' && (

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
                        )}

                        <div className='assign-child2'>
                            <div>
                                <Card style={{ width: '20rem', height: '7rem' }}>
                                    <Card.Body>
                                        <Card.Title>My name</Card.Title>
                                        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                                        <Card.Text>
                                            {empdetails?.fname + " " + empdetails?.lname}
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
                                            {empdetails?.email}
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
                                            {empdetails?.account_type}
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
                                {createdrecent?.length && createdrecent.map((l, index) => {
                                    return (
                                        <RecentTasks prop={l} />
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
