const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADD_TO_CART":
            const exist = state.find((x) => x.id === product.id);
            if(exist){
                return state.map((x) => x.id === product.id ? {...x, quantity: x.quantity + 1} : x);
            }
            else{
                const product = action.payload;
                return[
                    ...state,
                    {
                        ...product,
                        quantity: 1,
                    }
                ]
            }
        case "REMOVE_FROM_CART":
            const getItem = state.find((x) => x.id === product.id);
            if(getItem > 1){
                return state.map((x) => x.id === product.id ? {...x, quantity: x.quantity - 1} : x);
            }
            else{
                return state.filter((x) => x.id !== getItem.id);
            }
    
        default:
            return state;
    }
}

export default handleCart;  