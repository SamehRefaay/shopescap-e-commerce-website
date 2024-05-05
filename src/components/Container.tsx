import React from 'react';

interface Props {
	children: React.ReactNode;
	className?: string;
}

const Container = ({ children, className }: Props) => {
	return (
		<div className={`w-full max-w-screen-xl mx-auto p-4 xl:p-0 ${className} `}>
			{children}
		</div>
	);
};

export default Container;
