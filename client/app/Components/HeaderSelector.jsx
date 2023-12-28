"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import AdminHeader from './AdminHeader'
import UserHeader from './UserHeader'

const HeaderSelector = () => {
    const {currentUser}=useSelector((state)=>state.user)
  return (
    <div>
        {
            currentUser&&currentUser.role==="admin"?<AdminHeader/>:<UserHeader/>
        }
    </div>
  )
}

export default HeaderSelector