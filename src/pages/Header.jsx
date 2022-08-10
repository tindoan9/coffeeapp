import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBarLayout from '../components/layouts/NavbarUser-Layout/NabarLayout';
import Cart from './auth/Cart/Cart';
import Login from './auth/Login/Login';
import Profile from './auth/Profile/Profile';
import Register from './auth/Register/Register';
import HomePage from './HomePage/HomePage';
import Coffee from './products/Coffee/Coffee';
import OtherCategory from './products/OtherProducts/OtherProduct';

export default function Header(props) {
    const location = useLocation();

	const renderContent = () => {
		switch (location.pathname) {
		case "/":
			return <HomePage/>;
		case "/Login":
			return <Login/>;
		case "/cart":
			return <Cart/>;
		case "/profile":
			return <Profile/>;
        case "/other-category":
			return <OtherCategory/>;
        case "/coffee":
			return <Coffee/>;
        case "/register":
            return <Register/>;
		default:
			return <HomePage/>;
		}
	};

	return <NavBarLayout>{renderContent()}</NavBarLayout>
}