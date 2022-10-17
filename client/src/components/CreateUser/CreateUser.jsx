import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createUser} from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
// import { useNavigate } from "react-router-dom"


function validate(input) {
    let errors = {};
    if (!input.name){
        errors.name = "Name is required"
    } else if(!input.username){
        errors.username = "Username is required"
    } else if(!input.website){
        errors.website = "Website is required"
    } else if(!input.phone) {
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
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.email) == false || !input.email) {
        errors.email = "Enter a valid email";
    }
    return errors;
}

const CreateRecipe = () => {
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)
    const [errors, setError] = useState({})

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
        <div>
            <NavBar></NavBar>
            <div>
                <h2>Create user</h2>
            </div>
            <form onSubmit={
                (e) => handleSubmit(e)
            }>

                <div>
                    <div>
                        <strong>
                            <p>Name:</p>
                        </strong>
                        <input type="text"
                            value={
                                input.name
                            }
                            name="name"
                            onChange={
                                (e) => handleChange(e)
                            }/> 
                            <div> 
                             {errors.name ?
                        <strong>
                            <p className='error'>
                                {
                                errors.name
                            }</p>
                        </strong>: <p><br /></p> }</div>
                    </div>
                    <div>
                        <strong>
                            <p>Username:</p>
                        </strong>
                        <input type="text"
                            value={
                                input.username
                            }
                            name="username"
                            onChange={
                                (e) => handleChange(e)
                            }/> {
                        errors.username ? <strong>
                            <p className='error'>
                                {
                                errors.username
                            }</p>
                        </strong>: <p><br /></p>
                    } </div>
                    <div className='lastRow'>
                        <strong>
                            <p>Website:</p>
                        </strong>
                        <input type="text"
                            value={
                                input.website
                            }
                            name="website"
                            onChange={
                                (e) => handleChange(e)
                            }/> {
                        errors.website ? <strong>
                            <p className='error'>
                                {
                                errors.website
                            }</p>
                        </strong>: <p><br /></p>
                    }
                     </div>
                </div>
                <div>
                    <div>
                        <strong>
                            <p>Email:</p>
                        </strong>
                        <input type="text"
                            value={
                                input.email
                            }
                            name="email"
                            onChange={
                                (e) => handleChange(e)
                            }/> {
                        errors.email ? <strong>
                            <p className='error'>
                                {
                                errors.email
                            }</p>
                        </strong>: <p><br /></p>
                    }
                        </div>
                    <div>
                        <strong>
                            <p>Phone:</p>
                        </strong>
                        <input type="text"
                            value={
                                input.phone
                            }
                            name="phone"
                            onChange={
                                (e) => handleChange(e)
                            }/>
                        {
                        errors.phone ? <strong>
                            <p className='error'>
                                {
                                errors.phone
                            }</p>
                        </strong>: <p><br /></p>
                    }
                    </div>
                    <div>
                        <div>
                            <h4><strong>Address</strong></h4>
                        </div>
                        <div>
                            <strong>
                                <p>Street:</p>
                            </strong>
                            <input type="text"
                                value={
                                    input.street
                                }
                                name="street"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            {
                            errors.street ? <strong>
                                <p className='error'>
                                    {
                                    errors.street
                                }</p>
                            </strong>: <p><br /></p>
                        }
                        </div>
                        <div>
                            <strong>
                                <p>Suite:</p>
                            </strong>
                            <input type="text"
                                value={
                                    input.suite
                                }
                                name="suite"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            {
                            errors.suite ? <strong>
                                <p className='error'>
                                    {
                                    errors.suite
                                }</p>
                            </strong>: <p><br /></p>
                        }
                        </div>
                        <div>
                            <strong>
                                <p>City:</p>
                            </strong>
                            <input type="text"
                                value={
                                    input.city
                                }
                                name="city"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            {
                            errors.city ? <strong>
                                <p className='error'>
                                    {
                                    errors.city
                                }</p>
                            </strong>: <p><br /></p>
                        }
                        </div>
                        <div>
                            <strong>
                                <p>Zip code:</p>
                            </strong>
                            <input type="text"
                                value={
                                    input.zipcode
                                }
                                name="zipcode"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            {
                            errors.zipcode ? <strong>
                                <p className='error'>
                                    {
                                    errors.zipcode
                                }</p>
                            </strong>: <p><br /></p>
                        }
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4><strong>Geo</strong></h4>
                        </div>
                        <div>
                            <strong>
                                <p>Latitude:</p>
                            </strong>
                            <input type="text"
                                value={
                                    input.lat
                                }
                                name="lat"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            <p><br /></p>
                        </div>
                        <div>
                            <strong>
                                <p>Longuitude:</p>
                            </strong>
                            <input type="text"
                                value={
                                    input.lng
                                }
                                name="lng"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            <p><br /></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4><strong>Company</strong></h4>
                        </div>
                        <div>
                            <strong>
                                <p>Name:</p>
                            </strong>
                            <input type="text"
                                value={
                                    input.companyName
                                }
                                name="companyName"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            {
                            errors.companyName ? <strong>
                                <p className='error'>
                                    {
                                    errors.companyName
                                }</p>
                            </strong>: <p><br /></p>
                        }
                        </div>
                        <div>
                            <strong>
                                <p>Catch Phrase:</p>
                            </strong>
                            <input type="text"
                                value={
                                    input.catchPhrase
                                }
                                name="catchPhrase"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            {
                            errors.catchPhrase ? <strong>
                                <p className='error'>
                                    {
                                    errors.catchPhrase
                                }</p>
                            </strong>: <p><br /></p>
                            }
                        </div>
                        <div>
                            <strong>
                                <p>Bs:</p>
                            </strong>
                            <input type="text"
                                value={
                                    input.bs
                                }
                                name="bs"
                                onChange={
                                    (e) => handleChange(e)
                                }/>
                            {
                            errors.bs ? <strong>
                                <p className='error'>
                                    {
                                    errors.bs
                                }</p>
                            </strong>: <p><br /></p>
                            }
                        </div>
                    </div>
                </div>
                <div className='submit'>
                    <button type="submit">Create User</button>
                </div>
            </form>
        </div>
    )
}

export default CreateRecipe