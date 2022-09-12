import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Overlay from '../components/Overlay';
import Banner from './components/Banner';
import BookTicket from './components/BookTicket';
import Content from './components/Content';
import TicketPayment from './components/TicketPayment';

function Event() {
	return (
		<>
			<Overlay>
				<BookTicket />
			</Overlay>
			<Navbar />
			<Banner />
			<Content />
			<Footer />
		</>
	);
}

export default Event;
