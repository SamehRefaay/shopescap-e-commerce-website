import React from 'react';

const MarkLabel = ({
	title,
	backgroundColor,
	animation,
}: {
	title: string;
	backgroundColor: string;
	animation?: string;
}) => {
	return (
		<div
			className={`relative text-white ${backgroundColor} bg-opacity-80 hover:bg-opacity-100 py-1 px-2 rounded-md`}
		>
			<p>{title}</p>
			{animation && (
				<div
					className={`absolute top-1 left-3 w-5 h-5 rounded-full bg-slate-300 ${animation} duration-300`}
				></div>
			)}
		</div>
	);
};

export default MarkLabel;
