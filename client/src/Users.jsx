import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete('deleteUser/' + id)
            .then(res => {
                console.log(res);
                // After successful delete, update the user list
                setUsers(users.filter(user => user._id !== id));
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex'>
            <div className='w-50'>
                <Link to='/create' className='btn btn-success'>Ajouter</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.Nom}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-success'>Modifier</Link>
                                    <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;
