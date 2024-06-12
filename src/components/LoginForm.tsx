import React, { Component, FormEvent } from 'react'
import { Button, Form } from 'react-bootstrap'
type StateType = {
    username : string,
    password : string,
    messagePassword : string,
    messageUsername : string
}

export default class LoginForm extends Component<{},StateType > {
    constructor(props: {}) {
        super(props);
        this.state = {
           username:"",
           password : "",
           messagePassword : "",
           messageUsername : ""
        }
    }
    handleSubmitForm = (e : React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        // // lấy ra thông tin của input 
        // console.log(this.state);

        //validate 
        if(this.state.username.trim() == ""){ // xóa khoảng trắng 2 đầu s
         
            // this.setState((pre)=>{
            //     console.log(pre);
            //     return {...pre,username: "abc"}
            // })
            // this.setState((pre)=>{
            //     console.log(pre);
            //     return {...pre,password: "123"}
            // })
            // this.setState((pre)=>{
            //     console.log(pre);
            //     return {...pre,messagePassword: "nothing"}
            // })
           
        }
        
    }
    handleChangeInput = (e : React.ChangeEvent<HTMLInputElement>)=>{
            let key = e.target.name; // giá trị của thuộc tính name
            let value = e.target.value;
            this.setState({
               ...this.state,
               [key] : value
            })
    }
 
    render() {
        console.log(this.state);
        
        return (
            <Form onSubmit={this.handleSubmitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="username" onChange={this.handleChangeInput} placeholder="Enter email" />
                    <Form.Text className="text-danger">
                     
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={this.handleChangeInput} placeholder="Password" />
                    <Form.Text className="text-danger">
                       
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}
