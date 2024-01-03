import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
function BasicExample() {

    const [userDatas, setUserDatas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/userdatas')
            .then((res) => {
                res.json().then((data) => {
                    setUserDatas(data.data)
                })
            }).catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <div className="container w-4/5 m-auto">
            <div className='flex justify-between py-3 items-center px-5'>
                <h1 className='text-3xl py-5 underline'> User List </h1>

                <div className='flex flex-col items-center text-center'>
                    <span className='h-14 w-14 border rounded-full flex items-center justify-center
                        hover:border-green-500
                        cursor-pointer
                    '>
                        S
                    </span>
                    <Link to='/profile'>Profile</Link>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="flex flex-row bg-gray-200 p-2">
                    <div class="w-1/4">ID</div>
                    <div class="w-1/4">Fullname</div>
                    <div class="w-1/4">Phone</div>
                    <div class="w-1/4">Email</div>
                </div>

                {
                    userDatas.map((item, index)=>
                        <div key={index} class="flex flex-row gap-4 p-2">
                            <div class="w-1/4"> {item._id} </div>
                            <div class="w-1/4"> {item.fullName} </div>
                            <div class="w-1/4"> {item.email} </div>
                            <div class="w-1/4"> {item.phoneno} </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default BasicExample;