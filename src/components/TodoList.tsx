import React, { Component } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'

export default class TodoList extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='m-3 p-2 border border-1 border-dark'>
                    <h1>Danh sách công việc</h1>
                    <nav className='mb-3'>
                        <Form>
                            <Row>
                                <Col xs="9">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </nav>
                    <Alert className='p-1 my-2' variant={'dark'}>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div>
                            <Form.Check label="hehe" />
                            </div>
                            <div>
                                <Button variant='warning me-3'>Sửa</Button>
                                <Button variant='danger'>Xóa</Button>
                            </div>
                        </div>
                    </Alert>
                    <Alert className='p-1 my-2' variant={'dark'}>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div>
                            <Form.Check label="hehe" />
                            </div>
                            <div>
                                <Button variant='warning me-3'>Sửa</Button>
                                <Button variant='danger'>Xóa</Button>
                            </div>
                        </div>
                    </Alert>
                    <Alert className='p-1 my-2' variant={'dark'}>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div>
                            <Form.Check label="hehe" />
                            </div>
                            <div>
                                <Button variant='warning me-3'>Sửa</Button>
                                <Button variant='danger'>Xóa</Button>
                            </div>
                        </div>
                    </Alert>
                    <Alert className='p-1 my-2' variant={'dark'}>
                        <div className='d-flex align-items-center justify-content-between'>
                            <div>
                            <Form.Check label="hehe" />
                            </div>
                            <div>
                                <Button variant='warning me-3'>Sửa</Button>
                                <Button variant='danger'>Xóa</Button>
                            </div>
                        </div>
                    </Alert>
                </div>
            </div>
        )
    }
}
