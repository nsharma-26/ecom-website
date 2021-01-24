import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
function Search(props) {
    const [inputs, setInput] = useState({fname : "", username : "", email : ""});
    const {fname, username, email} = inputs;
    const handleChange = (e) => {
        const {name, value} = e.target
        setInput((inputs)=>({...inputs, [name] : value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {fname: fname, username : username, email : email};
        axios.post('https://jsonplaceholder.typicode.com/users', data)
        .then((response)=>{
            alert(response.data);
            console.log(response.data);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col> 
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" name="fname" value={fname} onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" name="username" value={username} onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" name="email" value={email} onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant="primary" type="submit" >
                            Submit
                        </Button>                        
                    </Col>                    
                </Row>
            </Form>
        </div>
    )
}

export default Search
