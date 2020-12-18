import React from 'react'
import './MainTemplate.css'

const MainTemplate = props => {
    return (
        <div>
            <header className='main-template__header'>
                <nav className='main-template__main-nav'>
                    <ul>
                        <li>home</li>
                        <li>calendar</li>
                    </ul>
                </nav>
            </header>
            <main className='main-template__main'>{props.children}</main>
        </div>
    )
}

export default MainTemplate
