import React,{useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import { authApp } from '../common/AuthContext';

function Login() {
    const [userdata, setUserData] = useState({});
    const {userData, LoginFunction} =  authApp();

    const navigate = useNavigate();

    function handelUserdata(e){
        setUserData(
            {...userdata, [e.target.name]: e.target.value}
        )
    }

    function apiCallFor(){
        console.log(localStorage.getItem('userToken'))
        fetch('http://localhost:8000/login',
            {
                method:"POST",
                body: JSON.stringify(userdata),
                headers : {
                    'Content-Type': 'application/json',
                    'Authorization':(localStorage.getItem('userToken'))?  localStorage.getItem('userToken') : null,
                }
            }
        ).then((response)=>{
            response.json().then((data)=>{
                alert(data.msg);
                LoginFunction(data.data, data.accessToken);
                navigate('/');
            })
        }).catch((err)=>{
            alert(err.msg);
            console.log(err);
        })
    }
    return (
        <div className='m-auto w-full h-screen flex flex-col items-center'>
            <div className='border-2 border-blue-500 w-1/5 flex flex-col gap-4 px-4 py-6 rounded'>
                <h1 className='text-center'>Sign Up </h1>
            
                <div className="row flex justify-between">
                    <div>
                        <label htmlFor="foremail">Email</label>
                    </div>
                    <div>
                        <input type="email" className='border-2 border-blue-400 px-2' 
                        name='email'
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
                <button type="submit" onClick={apiCallFor} className='border border-yellow-600  rounded-lg'>Login</button>

                <div className="alreadyhaveAcc">
                    <h1>Already have an Account <Link to='/register' className='text-blue-400 underline'>SignUp</Link> </h1>
                </div>
            </div>
        </div>
    )
}

export default Login