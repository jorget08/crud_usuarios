import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createUser} from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
// import { useNavigate } from "react-router-dom"
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


function validate(input) {
    let errors = {};
    if (!input.name){
        errors.name = "Name is required"
    } else if(!input.username){
        errors.username = "Username is required"
    } else if(!input.website){
        errors.website = "Website is required"
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.email) == false || !input.email) {
        errors.email = "Enter a valid email";
    }else if(!input.phone) {
        errors.phone = "Phone is required";
    }  else if(!input.street){
        errors.street = "Street is required"
    } else if(!input.suite){
        errors.suite = "Suite is required"
    } else if(!input.city){
        errors.city = "City is required"
    } else if(!input.zipcode){
        errors.zipcode = "Zip code is required"
    } else if(!input.companyName){
        errors.companyName = "Company name is required"
    } else if(!input.catchPhrase){
        errors.catchPhrase = "Catch phrase is required"
    } else if(!input.bs){
        errors.bs = "Bs is required"
    } 
    return errors;
}

const CreateRecipe = () => {
    const dispatch = useDispatch()
    const [errors, setError] = useState({})
    const divStyles = {boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                     marginLeft:"250px", marginRight:"250px", 
                     background:"rgba(255,255,255,0.5)", 
                     borderRadius:"15px"}
    const pStyles = {color:"red"}

    // const navigate = useNavigate()

    const [input, setInput] = useState({
        name: "",
        username: "",
        website: "",
        street: "",
        suite: "",
        zipcode: "",
        companyName: "",
        phone: "",
        lat: "",
        lng: "",
        catchPhrase: "",
        bs: "",
        avatar: "",
        email: "",
        city: "",
    })


    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setError(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleSubmit(e) {
        if (!input.name){
            e.preventDefault()
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        } else if(!input.username){
            e.preventDefault()
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        } else if(!input.website){
            e.preventDefault()
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        } else if(!input.phone) {
            e.preventDefault()
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        }  else if(!input.street){
            e.preventDefault()
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        } else if(!input.suite){
            e.preventDefault()
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        } else if(!input.city){
            e.preventDefault()
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        } else if(!input.zipcode){
            e.preventDefault()
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        } else if(!input.companyName){
            e.preventDefault()
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        } else if(!input.catchPhrase){
            e.preventDefault()
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        } else if(!input.bs){
            e.preventDefault()
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.email) == false || !input.email) {
            e.preventDefault()
            setError(validate({
                ...input,
                [e.target.name]: e.target.value
            }));
        }

         else {
            e.preventDefault()
            dispatch(createUser(input))
            alert('User sucessfuly created!!!')
            setInput({
                name: "",
                username: "",
                website: "",
                street: "",
                suite: "",
                zipcode: "",
                companyName: "",
                phone: "",
                lat: "",
                lng: "",
                catchPhrase: "",
                bs: "",
                avatar: "",
                email: "",
                city: "",
            })
            // navigate("/home")
        }
    }

    return (
        <div style={{backgroundColor:"rgba(166, 222, 132, 20)"}}>
            <NavBar></NavBar>
            <br />
            <div>
                <h2>Create user</h2>
            </div>
            <br />
            <Form noValidate onSubmit={
                (e) => handleSubmit(e)
            } >
                <div style={divStyles}>
            <Row className="mb-3" style={{ justifyContent:"space-evenly", marginLeft:"50px", marginRight:"50px" }}>

                <div>
                    <br />
                    <h4><strong>User</strong></h4>
                </div>
                <br />
                <Form.Group as={Col} md="3">
                        <strong>
                            <Form.Label>Name: </Form.Label>
                        </strong>
                        <Form.Control type="text"
                            value={
                                input.name
                            }
                            name="name"
                            onChange={
                                (e) => handleChange(e)
                            }
                            isValid={input.name && !errors.name}/> 
                            <div> 
                             {errors.name ?
                        <strong>
                            <p style={pStyles}>
                                {
                                errors.name
                            }</p>
                        </strong>: <p><br /></p> }</div>
                    </Form.Group>
                    <Form.Group as={Col} md="3">
                        <strong>
                            <Form.Label>Username:</Form.Label>
                        </strong>
                        <Form.Control type="text"
                            value={
                                input.username
                            }
                            name="username"
                            onChange={
                                (e) => handleChange(e)
                            }
                            isValid={input.username && !errors.username}/> {
                        errors.username ? <strong>
                            <p style={pStyles}>
                                {
                                errors.username
                            }</p>
                        </strong>: <p><br /></p>
                    } </Form.Group>
                    <Form.Group as={Col} md="3">
                        <strong>
                            <Form.Label>Website:</Form.Label>
                        </strong>
                        <Form.Control type="text"
                            value={
                                input.website
                            }
                            name="website"
                            onChange={
                                (e) => handleChange(e)
                            }
                            isValid={input.website && !errors.website}/> {
                        errors.website ? <strong>
                            <p style={pStyles}>
                                {
                                errors.website
                            }</p>
                        </strong>: <p><br /></p>
                    }
                     </Form.Group>
            </Row>
            <Row className="mb-2" style={{ justifyContent:"space-evenly", marginLeft:"50px", marginRight:"50px" }}>
                    <Form.Group as={Col} md="3">
                        <strong>
                            <Form.Label>Email:</Form.Label>
                        </strong>
                        <Form.Control type="text"
                            value={
                                input.email
                            }
                            name="email"
                            onChange={
                                (e) => handleChange(e)
                            }
                            isValid={input.email && !errors.email}/> {
                        errors.email ? <strong>
                            <p style={pStyles}>
                                {
                                errors.email
                            }</p>
                        </strong>: <p><br /></p>
                    }
                        </Form.Group>
                    <Form.Group as={Col} md="3">
                        <strong>
                            <Form.Label>Phone:</Form.Label>
                        </strong>
                        <Form.Control type="text"
                            value={
                                input.phone
                            }
                            name="phone"
                            onChange={
                                (e) => handleChange(e)
                            }
                            isValid={input.phone && !errors.phone}/>
                        {
                        errors.phone ? <strong>
                            <p style={pStyles}>
                                {
                                errors.phone
                            }</p>
                        </strong>: <p><br /></p>
                    }
                    </Form.Group>
                </Row>
                </div> 
                <div style={divStyles}>
                    <br />
                        <div>
                            <h4><strong>Address</strong></h4>
                        </div>
                        <br />
                <Row className="mb-2" style={{ justifyContent:"space-evenly", marginLeft:"50px", marginRight:"50px" }}>
                        <Form.Group as={Col} md="3">
                            <strong>
                                <Form.Label>Street:</Form.Label>
                            </strong>
                            <Form.Control type="text"
                                value={
                                    input.street
                                }
                                name="street"
                                onChange={
                                    (e) => handleChange(e)
                                }
                                isValid={input.streer && !errors.streer}/>
                            {
                            errors.street ? <strong>
                                <p style={pStyles}>
                                    {
                                    errors.street
                                }</p>
                            </strong>: <p><br /></p>
                        }
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <strong>
                                <Form.Label>Suite:</Form.Label>
                            </strong>
                            <Form.Control type="text"
                                value={
                                    input.suite
                                }
                                name="suite"
                                onChange={
                                    (e) => handleChange(e)
                                }
                                isValid={input.suite && !errors.suite}/>
                            {
                            errors.suite ? <strong>
                                <p style={pStyles}>
                                    {
                                    errors.suite
                                }</p>
                            </strong>: <p><br /></p>
                        }
                        </Form.Group>
                        </Row>
                        <Row className="mb-2" style={{ justifyContent:"space-evenly", marginLeft:"50px", marginRight:"50px" }}>
                        <Form.Group as={Col} md="3">
                            <strong>
                                <Form.Label>City:</Form.Label>
                            </strong>
                            <Form.Control type="text"
                                value={
                                    input.city
                                }
                                name="city"
                                onChange={
                                    (e) => handleChange(e)
                                }
                                isValid={input.city && !errors.city}/>
                            {
                            errors.city ? <strong>
                                <p style={pStyles}>
                                    {
                                    errors.city
                                }</p>
                            </strong>: <p><br /></p>
                        }
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <strong>
                                <Form.Label>Zip code:</Form.Label>
                            </strong>
                            <Form.Control type="text"
                                value={
                                    input.zipcode
                                }
                                name="zipcode"
                                onChange={
                                    (e) => handleChange(e)
                                }
                                isValid={input.zipcode && !errors.zipcode}/>
                            {
                            errors.zipcode ? <strong>
                                <p style={pStyles}>
                                    {
                                    errors.zipcode
                                }</p>
                            </strong>: <p><br /></p>
                        }
                        </Form.Group>
                    </Row>
                    </div>
                    <div style={divStyles}>
                    <br />
                    <Row className="mb-2" style={{ justifyContent:"space-evenly", marginLeft:"50px", marginRight:"50px" }}>
                            
                            <h4><strong>Geo</strong></h4>
                            <br />
                            <Form.Group as={Col} md="3">
                            <strong>
                                <Form.Label>Latitude:</Form.Label>
                            </strong>
                            <Form.Control type="text"
                                value={
                                    input.lat
                                }
                                name="lat"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            <p><br /></p>
                            </Form.Group>
                        <Form.Group as={Col} md="3">
                            <strong>
                                <Form.Label>Longuitude:</Form.Label>
                            </strong>
                            <Form.Control type="text"
                                value={
                                    input.lng
                                }
                                name="lng"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            <p><br /></p>
                        </Form.Group>
                    </Row>
                    </div>
                    <div style={divStyles}>
                        <br />
                        <div>
                            <h4><strong>Company</strong></h4>
                        </div>
                        <br />
                    <Row className="mb-3" style={{ justifyContent:"space-evenly", marginLeft:"50px", marginRight:"50px" }}>
                        <Form.Group as={Col} md="3">
                            <strong>
                                <Form.Label>Name:</Form.Label>
                            </strong>
                            <Form.Control type="text"
                                value={
                                    input.companyName
                                }
                                name="companyName"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            {
                            errors.companyName ? <strong>
                                <p style={pStyles}>
                                    {
                                    errors.companyName
                                }</p>
                            </strong>: <p><br /></p>
                        }
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <strong>
                                <Form.Label>Catch Phrase:</Form.Label>
                            </strong>
                            <Form.Control type="text"
                                value={
                                    input.catchPhrase
                                }
                                name="catchPhrase"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            {
                            errors.catchPhrase ? <strong>
                                <p style={pStyles}>
                                    {
                                    errors.catchPhrase
                                }</p>
                            </strong>: <p><br /></p>
                            }
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <strong>
                                <Form.Label>Bs:</Form.Label>
                            </strong>
                            <Form.Control type="text"
                                value={
                                    input.bs
                                }
                                name="bs"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            {
                            errors.bs ? <strong>
                                <p style={pStyles}>
                                    {
                                    errors.bs
                                }</p>
                            </strong>: <p><br /></p>
                            }
                        </Form.Group>
                    </Row>
                    </div>
                <div className='submit'>
                    <Button variant="warning" type="submit" style={{width:"25rem"}}><strong>Create User</strong></Button>
                </div>
                <br />
                
            </Form>
        </div>
    )
}

export default CreateRecipe