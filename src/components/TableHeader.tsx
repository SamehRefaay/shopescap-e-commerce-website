interface Props {
	headers: { key: string; colspan: string; title: string }[];
	className?: string;
}

const TableHeader = ({ headers, className }: Props) => {
	return (
		<div
			className={`hidden mt-10 p-4 w-full h-16 md:grid gap-4 ${className} bg-gray-200`}
		>
			{headers.map(header => (
				<span
					key={header.key}
					className={`col-span-1 md:${header.colspan} grid place-content-center text-xl text-center`}
				>
					{header.title}
				</span>
			))}
		</div>
	);
};

export default TableHeader;
