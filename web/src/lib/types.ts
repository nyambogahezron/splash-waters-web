export interface Product {
	id: number;
	name: string;
	image: string;
	price: number;
	description: string;
	category?: string;
}

export interface CartItem extends Product {
	quantity: number;
}
