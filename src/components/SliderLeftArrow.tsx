import { BiLeftArrow } from 'react-icons/bi';

const SliderLeftArrow = ({ onClick }: any) => {
	return (
		<div
			onClick={onClick}
			className="w-12 h-12 grid place-items-center absolute left-4 top-[50%] -translate-y-[50%] z-20 text-white bg-black bg-opacity-55 hover:bg-opacity-95 rounded-full"
		>
			<BiLeftArrow size={25} />
		</div>
	);
};

export default SliderLeftArrow;
