import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Overlay from '../components/Overlay';
import Banner from './components/Banner';
import BookTicket from './components/BookTicket';
import Content from './components/Content';

function Event() {
	const [modal, setModal] = useState(false);
	return (
		<>
			{modal ? (
				<Overlay>
					<BookTicket setModal={setModal} />
				</Overlay>
			) : null}

			<Navbar />
			<Banner />
			<Content setModal={setModal} />
			<Footer />
		</>
	);
}

export default Event;
