import NavBar from "./NavBar"
import React from "react"
import { useContext } from 'react'
import { UserContext } from './UserContext'

function Header() {
    const { user } = useContext(UserContext)
    return (
        <header className="header">
            <h1>NC News</h1>
            <NavBar />
            <p className="user">Welcome {user.username}</p>
            </header>
    )
}

export default Header