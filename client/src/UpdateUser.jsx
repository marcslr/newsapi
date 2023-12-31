import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
    const { id } = useParams();
    const [nom, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5173/getUser/' + id)
            .then(result => {
                console.log(result);
                setName(result.data.name);
                setEmail(result.data.email);
                setAge(result.data.age);
            })
            .catch(err => console.log(err));
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:5173/updateUser/" + id, { nom, email, age })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex2'>
            <div className='w-502'>
                <form onSubmit={Update}>
                    <h2> Update User </h2>
                    <div className='mb-2'>
                        <label htmlFor=""> Name </label>
                        <input
                            type="text"
                            placeholder='Votre name'
                            className='form-control'
                            value={nom}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=""> Email </label>
                        <input
                            type="text"
                            placeholder='Votre e-mail'
                            className='form-control'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=""> Age </label>
                        <input
                            type="text"
                            placeholder='Votre age'
                            className='form-control'
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <button className='btn btn-success'> Update User </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
