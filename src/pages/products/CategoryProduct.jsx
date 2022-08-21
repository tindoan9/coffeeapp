import React from 'react';
import { useLocation } from 'react-router-dom';
import CategoryLayout from '../../components/layouts/Category-Layout/CategoryLayout';
import Coffee from './Coffee/Coffee';
import FruitTea from './FruitTea/FruitTea';

export default function CategoryProduct(props) {
    const location = useLocation();

	const renderContent = () => {
		switch (location.pathname) {
		case "/products/coffee":
			return <Coffee/>;
		case "/products/tra-trai-cay-tra-sua":
			return <FruitTea/>;
		default:
			return <Coffee/>;
		}
	};

	return <CategoryLayout>{renderContent()}</CategoryLayout>
}