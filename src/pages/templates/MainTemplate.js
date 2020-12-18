import React from 'react'
import {Link} from 'react-router-dom'
import './MainTemplate.css'

const MainTemplate = props => {
    return (
        <div>
            <header className='main-template__header'>
                <nav className='main-template__main-nav'>
                    <ul>
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='/calendar'>calendar</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className='main-template__main'>{props.children}</main>
        </div>
    )
}

export default MainTemplate
