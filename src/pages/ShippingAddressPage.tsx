import React from 'react';
import {Link} from 'react-router-dom';
import CheckoutLayout from '../layout/CheckoutLayout';
import useInitCheckoutByCart from '../hooks/initCheckout';
import ErrorPage from './ErrorPage';
import Loading from '../components/Loading';

export default function ShippingAddressPage() {
	const {isInited, error} = useInitCheckoutByCart();

	if (error) {
		return <ErrorPage error={error} />;
	}

	if (!isInited) {
		return <Loading />;
	}

	return (
		<CheckoutLayout>
			<h1>Shipping address</h1>
			<Link to={'/'}>Go to contact info</Link>
		</CheckoutLayout>
	);
}