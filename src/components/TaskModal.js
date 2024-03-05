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
                    {detail?.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='lg-modal-container'>
                    <div className='lg-modal-child'>

                        <div className='lg-modal-child'>
                            <div><h5>Task ID:-</h5></div>
                            <div><p>{detail?._id}</p></div>
                        </div>
                    </div>

                    <div className='lg-modal-child'>
                        <div><h5>Date Created</h5></div>
                        <div><p> {new Date(detail?.createdAt).toUTCString()}</p></div>

                    </div>

                    <div className='lg-modal-child'>
                        <div><h5>Task Description</h5></div>
                        <div><p> {detail?.description}</p></div>

                    </div>

                    <div className='lg-modal-child'>
                        <div><h5>Assigned By</h5></div>
                        <div><p>{detail?.assignedBy?.fname}</p></div>
                    </div>


                    <div className='lg-modal-child'>
                        <div><h5>Assigned To</h5></div>
                        <div><p>{detail?.assignedTo?.fname}</p></div>
                    </div>


                    <div className='lg-modal-child'>
                        <div><h5>Task Status</h5></div>
                        {detail?.status == 'complete' ? (
                            <div><p style={{ color: 'rgb(76, 187, 23)', fontWeight: 'bold' }}>{detail?.status}</p></div>
                        ) : (
                            <div><p style={{ color: '#FFC300', fontWeight: 'bold' }}>{detail?.status}</p></div>
                        )}

                    </div>

                </div>
            </Modal.Body>
        </Modal>

    )
}

export default TaskModal
