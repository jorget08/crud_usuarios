import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux'
import { searchUserByName } from '../../redux/actions'

const NavBar = () => {
    const dispatch = useDispatch()
    const [name, setName] =  useState("");

    function handleChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(searchUserByName(name))
        setName("")
    }
  return (
    <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="/home">Users</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/create/user">Create</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={name}
              onChange={(e) => handleChange(e)}
            />
            <Button 
            variant="outline-success"
            type='submit'
            onClick={(e) => handleSubmit(e)}>Search</Button>
          </Form>
        </Container>
    </Navbar>
  )
}

export default NavBar;