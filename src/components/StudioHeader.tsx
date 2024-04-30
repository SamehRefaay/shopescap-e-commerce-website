import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/black-logo.png';
import { IoReturnDownBack } from 'react-icons/io5';

const StudioHeader = () => {
	return (
		<div className="px-4 bg-black text-white flex items-center justify-between">
			<Link
				href={'/'}
				className="flex item-center gap-3 hover:text-blue-500 duration-200"
			>
				<IoReturnDownBack className="text-2xl" /> Go to website
			</Link>
			<Image src={logo} alt="logo" className="w-24" />
			<p className="text-sm">Admin Studio for Shopscape Online Shopping </p>
		</div>
	);
};

export default StudioHeader;
