import {ICartItem, IOrder, IOrderDiscount} from 'boundless-api-client';
import {TotalCalculator} from 'boundless-api-client/totalCalculator';

export const calcCartTotal = (items: ICartItem[] | undefined, order: IOrder | undefined, discounts: IOrderDiscount[]) => {
	if (!items || !order) return null;
	const calculator = new TotalCalculator();

	for (const item of items) {
		calculator.addItem(
			Number(item.item_id),
			Number(item.itemPrice.final_price) || 0,
			Number(item.qty) || 0
		);
	}

	if (discounts?.length) {
			calculator.setDiscounts(discounts);
	}

	calculator.setShipping(order.service_total_price ? parseFloat(order.service_total_price) : 0);

	return {
		total_qty: calculator.items.qty,
		subtotal_price: calculator.items.price,
		discount_for_order: calculator.calcTotal().discount,
		total_price: calculator.calcTotal().price,
	};
};

export interface IOrderTotal {
	total_qty: number;
	subtotal_price: number;
	discount_for_order: string;
	total_price: string;
}