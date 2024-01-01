import React from 'react'
import Table from '../Components/Table'
import { authApp } from '../common/AuthContext'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const {LogOutUser} = authApp();
    const navigate = useNavigate()

    function Logoutfunction(){
        LogOutUser();
        navigate('/login');
    }
    return (
        <div>
            <div>
                <Table/> 
            </div>
            <div>
                <button className='border border-blue-400 px-2 py-1 rounded' onClick={Logoutfunction}>Logout</button>
            </div>
        </div>
    )
}
