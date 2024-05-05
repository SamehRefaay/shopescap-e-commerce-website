import React from 'react';
import Container from './Container';

const Footer = () => {
	return (
		<div className="w-full h-24  bg-slate-200 ">
			<Container className="flex h-full items-center justify-center">
				&copy;Copyright 2024 | Shopescape | All Rights Reserved | powered by
				ReactBD.com
			</Container>
		</div>
	);
};

export default Footer;
