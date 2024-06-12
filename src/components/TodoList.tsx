import React, { Component } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
const colors = [
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark'
]


type Todo = {
    id: number,
    title: string,
    status: boolean
}
type StateType = {
    todos: Todo[],
    text : string
}

export default class TodoList extends Component<{}, StateType> {
    constructor(props: {}) {
        super(props);
        this.state = {
            todos: [
                { id: 1, title: "Học Toán", status: false },
                { id: 2, title: "Học code", status: true },
            ],
            text: ""
        }
    }
    handleChangeStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
        let id = e.target.value as number | unknown;
        let newTodos = this.state.todos.map(todo => {
            if (todo.id == id) {
                todo.status = !todo.status; // sửa trạng thai
            }
            return todo;
        })
        this.setState({
            ...this.state,
            todos: newTodos
        })
    }
    handleDelete = (id: number) => {
        if (window.confirm("Are you sure you want to delete")) {
            let newTodos = this.state.todos.filter(todo => todo.id != id);
            this.setState({
                ...this.state,
                todos: newTodos
            })
        }
    }
    handleSubmitForm = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault(); // tăt sự kiện submit 
        let newId = this.state.todos[this.state.todos.length-1].id+1;
        let newTodo = {
            id: newId,
            title: this.state.text,
            status: false
        }
        this.setState({
            ...this.state,
            todos:[...this.state.todos, newTodo],
            text:"" // reset form
        })
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='m-3 p-2 border border-1 border-dark'>
                    <h1 className='mb-4 text-center'>Danh sách công việc</h1>
                    <nav className='mb-3'>
                        <Form onSubmit={this.handleSubmitForm}>
                            <Row className='justify-content-center'>
                                <Col xs="9">
                                    <Form.Control
                                        type="text"
                                        placeholder="todo somthing"
                                        className=" mr-sm-2"
                                        value={this.state.text}
                                        onChange={e=> this.setState({...this.state,text: e.target.value})}
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </nav>
                    {
                        this.state.todos.map((todo) => {
                            // màu ngẫu nhiên
                            let indexRadom = Math.floor(Math.random() * 8) // từ 0-7

                            return <Alert key={todo.id} className='p-1 my-2' variant={colors[indexRadom]}>
                                <div className='d-flex align-items-center justify-content-between'>
                                    <div className='d-flex gap-2'>
                                        <Form.Check onChange={this.handleChangeStatus} defaultChecked={todo.status} value={todo.id} />
                                        <span className={todo.status ? 'text-decoration-line-through' : ''}>{todo.title}</span>
                                    </div>
                                    <div>
                                        <Button variant='warning me-3' >Sửa</Button>
                                        <Button variant='danger' onClick={() => this.handleDelete(todo.id)}>Xóa</Button>
                                    </div>
                                </div>
                            </Alert>
                        })
                    }
                </div>
            </div>
        )
    }
}
