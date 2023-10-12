import React from 'react';

function CreateUser() {
    return (
        <div className='d-flex2'>
            <div className='w-502'>
                <form>
                    <h2> Inscription </h2>
                    <div className='mb-2'>
                        <label htmlFor=""> Nom </label>
                        <input type="text" placeholder='Votre nom' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=""> Email </label>
                        <input type="text" placeholder='Votre e-mail' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=""> Age </label>
                        <input type="text" placeholder='Votre age' className='form-control'/>
                    </div>
                    <button className='btn btn-success'> S'inscrire </button>
                
                </form>
            </div>
           
        </div>
    )
}

export default CreateUser;