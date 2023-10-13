import React, { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    const [nom, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5173/createUser", {nom, email, age})
    .then(result => {
        console.log(result)
        navigate('/')
    })
    .catch(err => console.log(err))
console.log ("bonbon")
}
    return (
        <div className='d-flex2'>
            <div className='w-502'>
                <form onSubmit={Submit}>
                    <h2> Inscription </h2>
                    <div className='mb-2'>
                        <label htmlFor=""> Nom </label>
                        <input type="text" placeholder='Votre nom' className='form-control'
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=""> Email </label>
                        <input type="text" placeholder='Votre e-mail' className='form-control'
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=""> Age </label>
                        <input type="text" placeholder='Votre age' className='form-control'
                        onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <button className='btn btn-success'> S'inscrire </button>
                
                </form>
            </div>
           
        </div>
    )
}

export default CreateUser;