import React, {useEffect, useState} from 'react'
import Search from './Search'
import Action from './Action'
import { Accordion, Button, Card, Container } from 'react-bootstrap';
import axios from 'axios'
function OrderSearch() {
    const [user, setUser] = useState([])
    const [filteruser, setFilterUser] = useState([])
    const [isLoading, setisLoading] = useState(true)
    //const [eventKeyacc, seteventKeyacc] = useState("1")
    // const isLoading = true;
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response)=>{
           //console.log(response.data)
            setUser(response.data)
       })
       .catch((error)=>{
           console.log(error);
       })
    }, [])
    const handleChange = (e) =>{
        
        getUser(e.target.value);
        
    }

    const getUser = (id) =>{

        const newuser = user.filter(u=>u.id == id);
        if(newuser.length>0){
            setisLoading(false)
            setFilterUser(newuser);
            //seteventKeyacc("0")
        }
        else{
            setisLoading(true);
        }
        
    }
    return (
        
        <Container>            
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Search
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Search user={user} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Action
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Action user={user} filteruser={filteruser} isLoading={isLoading} handleChange={handleChange}/>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    )
}

export default OrderSearch
