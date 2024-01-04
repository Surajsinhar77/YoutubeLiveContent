import React from 'react'
import { authApp } from '../common/AuthContext'

function Profile() {
    const {userData} = authApp();
    
    return (
        <div>
            <div className="container w-4/5 m-auto">
                <div 
                    className="ProfileForm py-7 border px-5 text-xl flex flex-col gap-3" 
                    style={{"boxShadow" : 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px'}}>
                    <div className="row w-2/4 flex justify-between ">
                        <label htmlFor="">ID <span>{userData._id}</span></label>
                    </div>
                    <div className="row w-2/4 flex justify-between ">
                        <label htmlFor="">FullName</label>
                        <input type="text" placeholder={userData.fullName} className='border border-gray-300 px-2 py-1'/>
                    </div>
                    <div className="row w-2/4 flex justify-between ">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder={userData.email} className='border border-gray-300 px-2 py-1'/>
                    </div>
                    <div className="row w-2/4 flex justify-between ">
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder={userData.phoneno} className='border border-gray-300 px-2 py-1'/>
                    </div>

                    <div className="actionButtons">
                        div.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile