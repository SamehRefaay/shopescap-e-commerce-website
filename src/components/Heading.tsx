import React from 'react';

const Heading = ({
	title,
	className,
}: {
	title: string;
	className?: string;
}) => {
	return <h2 className={`font-[500] text-3xl ${className}`}>{title}</h2>;
};

export default Heading;
