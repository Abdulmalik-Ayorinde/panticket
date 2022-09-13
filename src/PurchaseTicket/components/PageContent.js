import React from 'react';
import './PageContent.css';
import PurchaseSummary from './PurchaseSummary';

function PageContent() {
	return (
		<div className='page-content-container'>
			<PurchaseSummary />
		</div>
	);
}

export default PageContent;
