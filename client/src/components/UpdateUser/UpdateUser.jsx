import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {updateUser, getUserDetail} from '../../redux/actions';
import NavBar from '../NavBar/NavBar';
import Alert from 'react-bootstrap/Alert';

function validate(input) {
    let errors = {};
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.email) == false || !input.email) {
        errors.email = "Enter a valid email";
    }
    return errors;
}

function UpdateUser(props) {

    const {id} = useParams()
    const user = useSelector(state => state.userDetail)
    const [errors, setError] = useState({})
    const dispatch = useDispatch()
    const history = useHistory()
    const [show, setShow] = useState(false)

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
        if(input.email){
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.email) == false){
                e.preventDefault()
                setError(validate({
                    ...input,
                    [e.target.name]: e.target.value
                }));
        }} else {
            for (const key in input) {
                if(input[key] == ""){
                    delete input[key]
                }
            }
            console.log(input)
            e.preventDefault()
            dispatch(updateUser(user.id, input))
            alert('User sucessfuly updated!!!')
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
            history.push("/home");
            // navigate("/home")
        }
    }

    useEffect(() => {
        dispatch(getUserDetail(id))
    }, [dispatch, id]
    );

  return (
    <div>
            <NavBar></NavBar>
            <div className='homeTitle'>
                    <h2>Update User</h2>
                </div>
            {user ? 
            <form onSubmit={
                (e) => handleSubmit(e)
            }>
                <div>
                    <div>
                        <strong>
                            <p>Name:</p>
                        </strong>
                            <p>Previous data: {user.name}</p>
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
                        <p>Previous data: {user.username}</p>
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
                        <p>Previous data: {user.website}</p>
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
                        <p>Previous data: {user.email}</p>
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
                        <p>Previous data: {user.phone}</p>
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
                            <p>Previous data: {user.address.street}</p>
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
                            <p>Previous data: {user.address.suite}</p>
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
                            <p>Previous data: {user.address.city}</p>
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
                            <p>Previous data: {user.address.zipcode}</p>
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
                            <p>Previous data: {user.address.geo.lat}</p>
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
                            <p>Previous data: {user.address.geo.lng}</p>
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
                            <p>Previous data: {user.company.name}</p>
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
                            <p>Previous data: {user.company.catchPhrase}</p>
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
                            <p>Previous data: {user.company.bs}</p>
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
                    <button type="submit">Update User</button>
                </div>
            </form>
            :
            <h1>Loading...</h1>
            }
        </div>
  )
}

export default UpdateUser;