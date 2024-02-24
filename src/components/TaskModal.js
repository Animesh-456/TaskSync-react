import { useState } from 'react';
import React from 'react'
import Modal from 'react-bootstrap/Modal';
const TaskModal = ({ show, onHide, detail }) => {

    return (

        <Modal
            size="lg"
            show={show}
            onHide={onHide}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    {detail}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='lg-modal-container'>
                    <div className='lg-modal-child'>

                        <div className='lg-modal-child'>
                            <div><h5>Task ID:-</h5></div>
                            <div><p>ID</p></div>
                        </div>
                    </div>

                    <div className='lg-modal-child'>
                        <div><h5>Task Description</h5></div>
                        <div><p> With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content</p></div>

                    </div>

                    <div className='lg-modal-child'>
                        <div><h5>Assigned By</h5></div>
                        <div><p>Animesh Mondal</p></div>
                    </div>


                    <div className='lg-modal-child'>
                        <div><h5>Assigned To</h5></div>
                        <div><p>Animesh Mondal</p></div>
                    </div>


                    <div className='lg-modal-child'>
                        <div><h5>Task Status</h5></div>
                        <div><p>Pending/Completed</p></div>
                    </div>

                </div>
            </Modal.Body>
        </Modal>

    )
}

export default TaskModal
