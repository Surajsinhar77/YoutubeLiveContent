import React from 'react'
import { authApp } from '../common/AuthContext'
import { AiOutlineCheck } from "react-icons/ai";

function Profile() {
    const {userData} = authApp();
    
    function checkChangeIninput(e){
        // e.preventDefault();
        if (e.target.value == ""){
            return true;
        }  
        return false;
    }

    const fullname = document.querySelector('.fullName');
    const email = document.querySelector('.email');
    const phoneno = document.querySelector('.phoneno');

    fullname.addEventListener('change', ()=>{
        
    })

    return (
        <div>
            <div className="container w-4/5 m-auto">
                <div 
                    className="ProfileForm py-7 border px-5 text-xl flex flex-col gap-3" 
                    style={{"boxShadow" : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <div className="row w-2/4 flex justify-between ">
                        <label htmlFor="">ID <span>{userData._id}</span></label>
                    </div>
                    <div className="row w-3/4 flex justify-between ">
                        <label htmlFor="">FullName</label>
                        <div className='flex flex-row items-center'>
                            <input type="text" placeholder={userData.fullName} className='fullName border border-gray-300 px-2 py-1'/>
                            <span className='pl-4 text-green-400 text-2xl'><AiOutlineCheck/></span>
                        </div>
                    </div>
                    <div className="row w-3/4 flex justify-between ">
                        <label htmlFor="">Email</label>
                        <div className='flex flex-row items-center'>
                            <input type="text" placeholder={userData.email} className='email border border-gray-300 px-2 py-1'/>
                            <span className='pl-4 text-green-400 text-2xl'><AiOutlineCheck/></span>
                        </div>
                    </div>
                    <div className="row w-3/4 flex justify-between ">
                        <label htmlFor="">Phone</label>
                        <div className='flex flex-row items-center'>
                            <input type="text" placeholder={userData.phoneno} className='phoneno border border-gray-300 px-2 py-1'/>
                            <span className='pl-4 text-green-400 text-2xl'><AiOutlineCheck/></span>
                        </div>
                    </div>

                    <div className="actionButtons">
                        <div className="saveData">
                            <button className='border text-gray-500 border-blue-400 px-2 py-1 rounded'>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile