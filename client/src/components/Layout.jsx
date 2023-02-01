import React from 'react';
import { Navbar } from './Navbar';

export const Layout = ({ children }) => {
	return (
		<React.Fragment>
			<div>
				<Navbar />
				{children}
			</div>
		</React.Fragment>
	);
};
