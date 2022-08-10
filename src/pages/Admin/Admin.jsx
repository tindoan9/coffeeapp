import React from 'react'
import { useLocation } from 'react-router-dom';
import NavBarAdminLayout from '../../components/layouts/NabarAdmin-Layout/NabarAdminLayout';

export default function Admin() {
    const location = useLocation();

	const renderContent = () => {
		// switch (location.pathname) {
		// case "/":
		// 	return ;
		// case "/Login":
		// 	return ;
		// case "/cart":
		// 	return ;
		// case "/profile":
		// 	return ;
        // case "/other-category":
		// 	return ;
        // case "/coffee":
		// 	return ;
        // case "/product-detail/:id":
        //     return <DetailCoffee/>;
        // case "/register":
        //     return <Register/>;
        // case "/cart/success/:id":
        //     return <Success/>;
		// default:
		// 	return <HomePage/>;
		// }
	};

	return <NavBarAdminLayout>{renderContent()}</NavBarAdminLayout>
}