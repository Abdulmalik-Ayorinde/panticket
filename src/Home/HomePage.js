import React from 'react';
import BigCard from '../components/BigCard';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import './homepage.css';

function HomePage() {
	return (
		<>
			<Navbar />
			<header className='home-header'>
				<div className='header-text'>
					<p className='text-content'>Connect and get ticket to </p>
					<p className='text-content'>events near you based on your</p>
					<p className='text-content'>interest</p>
				</div>
			</header>
			<section className='event-section'>
				<form className='search-form'>
					<div className='search-input'>
						<Input placeholder='Search Event' />
					</div>
					<div className='category-input'>
						<Input placeholder='Categories' />
					</div>
					<div className='form-btn'>
						<Button title='Search Event' variation={'secondary'} />
					</div>
				</form>

				<div className='event-container'>
					<p className='section-title'>Events near you</p>
					<div className='events'>
						<Card
							name='The Concert'
							image={'/image/image.png'}
							location='Lagos'
							price='N2000'
							date='10/10/2022'
						/>
						<Card
							name='The Concert'
							image={'/image/image.png'}
							location='Lagos'
							price='N2000'
							date='10/10/2022'
						/>
						<Card
							name='The Concert'
							image={'/image/image.png'}
							location='Lagos'
							price='N2000'
							date='10/10/2022'
						/>
						<Card
							name='The Concert'
							image={'/image/image.png'}
							location='Lagos'
							price='N2000'
							date='10/10/2022'
						/>
						<Card
							name='The Concert'
							image={'/image/image.png'}
							location='Lagos'
							price='N2000'
							date='10/10/2022'
						/>
						<Card
							name='The Concert'
							image={'/image/image.png'}
							location='Lagos'
							price='N2000'
							date='10/10/2022'
						/>
						<Card
							name='The Concert'
							image={'/image/image.png'}
							location='Lagos'
							price='N2000'
							date='10/10/2022'
						/>
						<Card
							name='The Concert'
							image={'/image/image.png'}
							location='Lagos'
							price='N2000'
							date='10/10/2022'
						/>
						<Card
							name='The Concert'
							image={'/image/image.png'}
							location='Lagos'
							price='N2000'
							date='10/10/2022'
						/>
					</div>
				</div>
				<div className='event-container'>
					<p className='section-title'>Featured Events</p>
					<div className='featured-section'>
						<BigCard
							name='The Concert'
							image={'/image/image.png'}
							location='Lagos'
							price='N2000'
							discount='20% off'
						/>
						<BigCard
							name='The Concert'
							image={'/image/image.png'}
							location='Lagos'
							price='N2000'
							discount='20% off'
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default HomePage;
