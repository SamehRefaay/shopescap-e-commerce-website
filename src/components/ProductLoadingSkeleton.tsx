const ProductLoadingSkeleton = () => {
	return (
		<div className="bg-gray-100 shadow-2xl m-2 p-4 cursor-pointer group">
			<div className="relative flex flex-col justify-center items-center gap-5">
				<div className="relative overflow-hidden">
					<div className="w-72 h-72 bg-gray-200"></div>
					<div className="absolute bottom-0 left-0 w-full flex justify-between items-center translate-y-20 group-hover:translate-y-0 transition-transform duration-300  ">
						<button className=" py-2 px-4 rounded-md text-white bg-black bg-opacity-75 hover:bg-opacity-100">
							<div className="flex gap-1"></div>
						</button>
						<button className=" py-2 px-4 rounded-md text-white bg-black bg-opacity-75 hover:bg-opacity-100">
							<div className="flex gap-1"></div>
						</button>
					</div>
				</div>

				<div className="w-full py-4 border-t-2 border-[#CCC]">
					<div className="w-full flex items-center justify-between">
						<p className="w-full h-16 bg-gray-200 text-base font-medium"></p>
						<div className="flex gap-1">
							<span className="w-10 h-16 bg-gray-200 font-normal line-through"></span>
						</div>
					</div>
					<div className="w-full flex items-center justify-between">
						<p className="w-10 h-16"></p>

						<span className="w-10 h-16 bg-gray-200"></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductLoadingSkeleton;
