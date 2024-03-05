import { useState } from 'react';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TaskModal from './TaskModal';

const RecentTasks = (props) => {
    const handleClose = () => setLgShow(false);
    const handleShow = () => setLgShow(true);


    const [lgShow, setLgShow] = useState(false);


    return (
        <>
            <TaskModal show={lgShow} onHide={handleClose} detail={props?.prop} />
            <Card className='task-card'>
                <Card.Header as="h5">{props?.prop?.title}</Card.Header>
                <Card.Body>




                    {props?.prop?.status == 'complete' ? (
                        <>
                            <Card.Title><p style={{ color: 'rgb(76, 187, 23)', fontWeight: 'bold' }}>{props?.prop?.status}</p></Card.Title>
                            <p>Date created : - {new Date(props?.prop?.createdAt).toUTCString()}</p>
                        </>
                    ) : (
                        <>
                            <Card.Title><p style={{ color: '#FFC300', fontWeight: 'bold' }}>{props?.prop?.status}</p></Card.Title>
                            <p>Date created : - {new Date(props?.prop?.createdAt).toUTCString()}</p>
                        </>
                    )}




                    <Card.Text>
                        {props?.prop?.description}
                    </Card.Text>

                    <div style={{ display: 'flex', flexDirection: 'row', gap: '2rem' }}>
                        <Button variant="secondary" onClick={handleShow}>Details</Button>
                        {/* <Button variant="success">Mark Done</Button> */}
                    </div>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default RecentTasks
