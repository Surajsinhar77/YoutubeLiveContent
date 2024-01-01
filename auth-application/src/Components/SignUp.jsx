import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    const [userData, setUserData] = useState({});

    function handelUserdata(e) {
        setUserData(
            { ...userData, [e.target.name]: e.target.value }
        )
    }


    function apiCallFor() {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        };

        fetch('http://localhost:8000/register', options)
        .then(response => response.json())
        .then(data => {
            alert(data.msg);
            console.log(data);
        })
        .catch(error => {
            alert(error.msg);
            console.log("IN the Catch Part error : ",error);
        });
    }


    return (
        <div className='m-auto w-full h-screen flex flex-col items-center'>
            <div className='border-2 border-blue-500 w-1/5 flex flex-col gap-4 px-4 py-6 rounded'>
                <h1 className='text-center'>Sign Up </h1>
                <div className="row flex justify-between">
                    <div>
                        <label htmlFor="forFullname">FullName</label>
                    </div>
                    <div>
                        <input type="text"
                            className='border-2 border-blue-400 px-2'
                            onChange={handelUserdata}
                            name='fullName'
                        />
                    </div>
                </div>
                <div className="row flex justify-between">
                    <div>
                        <label htmlFor="foremail">Email</label>
                    </div>
                    <div>
                        <input type="email" className='border-2 border-blue-400 px-2'
                            onChange={handelUserdata}
                            name='email'
                        />
                    </div>
                </div>
                <div className="row flex justify-between">
                    <div>
                        <label htmlFor="forPhone">phone</label>
                    </div>
                    <div>
                        <input type="tel" className='border-2 border-blue-400 px-2'
                            name='phoneno'
                            onChange={handelUserdata}
                        />
                    </div>
                </div>

                <div className="row flex justify-between">
                    <div>
                        <label htmlFor="forPassword">Pasword</label>
                    </div>
                    <div>
                        <input type="password" className='border-2 border-blue-400 px-2'
                            name='password'
                            onChange={handelUserdata}
                        />
                    </div>
                </div>
                <button type="submit" onClick={apiCallFor} className='border border-yellow-600  rounded-lg'>Submit</button>

                <div className="alreadyhaveAcc">
                    <h1>Already have an Account <Link to='/login' className='text-blue-400 underline'>Login</Link> </h1>
                </div>
            </div>
        </div>
    )
}

export default SignUp