export interface ProductProps {
	body: any;
	brand: string;
	category: [{ _key: string; _ref: string; _type: string }];
	color: string;
	description: string;
	image: { _type: string; asset: { _ref: string; _type: string } };
	position: string;
	price: number;
	quantity: number;
	ratings: number;
	isnew: boolean;
	rowprice: number;
	slug: { current: string; _type: string };
	title: string;
	_createdAt: string;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: string;
}
