import { FaStar } from 'react-icons/fa';

const Rating = ({
	rating,
	className,
}: {
	rating: number;
	className: string;
}) => {
	return (
		<div className={`${className} flex gap-1 justify-center items-center `}>
			<span className="">{rating}</span>
			<FaStar className=" text-yellow-500" />
		</div>
	);
};

export default Rating;
