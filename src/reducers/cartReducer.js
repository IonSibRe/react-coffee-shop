function reducer(state, action) {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.payload],
				amount: state.amount + 1,
			};

		case "CLEAR_CART":
			return { ...state, cart: [], total: 0, amount: 0 };

		case "REMOVE_ITEM":
			return {
				...state,
				cart: state.cart.filter(
					(cartItem) => cartItem.id !== action.payload
				),
				amount: state.amount - 1,
			};

		case "TOGGLE_AMOUNT":
			let tempCart = state.cart.map((cartItem) => {
				if (cartItem.id === action.payload.id) {
					const price = parseFloat(cartItem.price);
					const total = parseFloat(cartItem.total);

					if (action.payload.type === "inc") {
						const itemTotal = total + price;
						return {
							...cartItem,
							amount: cartItem.amount + 1,
							total: itemTotal.toFixed(2),
						};
					}
					if (action.payload.type === "dec") {
						if (cartItem.amount > 1) {
							const itemTotal = total - price;
							return {
								...cartItem,
								amount: cartItem.amount - 1,
								total: itemTotal.toFixed(2),
							};
						} else {
							const itemTotal = price;
							return {
								...cartItem,
								amount: 1,
								total: itemTotal.toFixed(2),
							};
						}
					}
				}

				return cartItem;
			});
			return { ...state, cart: tempCart };

		case "GET_TOTALS":
			let { total, amount } = state.cart.reduce(
				(cartTotal, cartItem) => {
					const { price, amount } = cartItem;
					const itemTotal = price * amount;

					cartTotal.total += itemTotal;
					cartTotal.amount += amount;

					return cartTotal;
				},
				{
					total: 0,
					amount: 0,
				}
			);

			total = parseFloat(total.toFixed(2));
			return { ...state, total, amount };

		case "ADD_SINGLE_ITEM_TO_CART":
			return {
				...state,
				cart: [...state.cart, action.payload],
				amount: action.payload.amount,
				total: action.payload.total,
			};

		default:
			throw new Error("no method matched the dispatch");
	}
}

export default reducer;
