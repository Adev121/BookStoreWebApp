import React from 'react'
import { useAuth } from '../Context/Authprovider'
import toast from 'react-hot-toast'
import { Navigate } from 'react-router-dom'

function Logout() {
    const [authUser,setAuthUser]= useAuth() 
    const handleLogout = () => {
        try {
            setAuthUser({
                user:null,
            })
            localStorage.removeItem('user');
            toast.success("Logout Successfully !");
            setTimeout(
                ()=>{
                    window.location.reload();
                },
                500
            )
        } catch (error) {
            toast.error("Something went wrong !"+error.message);
        }
        
    }
  return (
    <>
    <div>
        <button className='px-3 py-2 text-white bg-red-500 hover:bg-red-700 rounded-lg' onClick={handleLogout}>Logout</button>
    </div>
    </>
  )
}

export default Logout
