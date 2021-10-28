import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to='/' >Tracker</Link>
            <ul>
                <li>
                    <Link to='/'>Exercises</Link>
                    <Link to='/create'>Exercises</Link>
                    <Link to='/user'>Exercises</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
