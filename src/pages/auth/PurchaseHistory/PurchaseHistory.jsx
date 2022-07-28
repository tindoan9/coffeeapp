import React from 'react';
import { useLocation } from 'react-router-dom';
import PurchaseHistoryLayout from '../../../components/layouts/PurchaseHistory-layout/PurchaseHistoryLayout';
import PurchaseHistoryCancelled from './PurchaseHistoryCancelled/PurchaseHistoryCancelled';
import PurchaseHistoryConfirm from './PurchaseHistoryConfirm/PurchaseHistoryConfirm';
import PurchaseHistoryDelivering from './PurchaseHistoryDelivering/PurchaseHistoryDelivering';
import PurchaseHistoryReceived from './PurchaseHistoryReceived/PurchaseHistoryReceived';

export default function PurchaseHistory(props) {
    const location = useLocation();

	const renderContent = () => {
		switch (location.pathname) {
		case "/order-list":
			return <PurchaseHistoryConfirm/>;
		case "/order-list/delivering":
			return <PurchaseHistoryDelivering/>;
		case "/order-list/received":
			return <PurchaseHistoryReceived/>;
		case "/order-list/cancelled":
			return <PurchaseHistoryCancelled/>;
		default:
			return <PurchaseHistoryConfirm/>;
		}
	};

	return <PurchaseHistoryLayout>{renderContent()}</PurchaseHistoryLayout>
}