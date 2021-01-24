import React, {useState, useEffect} from 'react'
import { Table, Form } from 'react-bootstrap'
import axios from 'axios'
function Action(props) {
    //console.log(props);
    return (
        <div>
            
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select" name='user' onChange={props.handleChange}>
                    <option key="-1">Select User</option>
                    {
                        props.user.map((item)=>
                            <option key={item.id} value={item.id}>{item.name}</option>
                        )
                    }  
                </Form.Control>
            </Form.Group>
            
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.isLoading === true ?
                        (props.user.map((item)=>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>)

                        ) :
                        (props.filteruser !== undefined ? 
                            props.filteruser.map((item)=>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>

                        ) : "")
                    }
                                   
                </tbody>
            </Table>
        </div>
    )
}

export default Action
