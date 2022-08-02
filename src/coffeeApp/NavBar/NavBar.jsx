import React from 'react'
import LogoPage from '../../images/logo-page.png'
import { NavLink } from 'react-router-dom'
import { SideBarData } from './SideBarData'

export default function NavBar() {
    return (
        <>
            <header>
                <img src={LogoPage} alt="" className='logo' />
                <nav className='nav__links'>
                    <ul>
                        {SideBarData.map((item, index) => {
                            return (
                                <NavLink to={item.path} key={index}>
                                    <li>{item.title}</li>
                                </NavLink>
                            )
                        })}

                    </ul>
                </nav>
                <b className='cart__number'>Cart <span>0</span></b>
                

            </header>

        </>
    )
}