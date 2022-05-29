
export const initialState = {
    cart: [],
}

const reducer = (state,action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case 'REMOVE_FROM_CART':
            const index = state.cart.findIndex(
                (item)=> 
                item.id === action.id
            )
            let newCart = [...state.cart];
            if(index>=0){
                newCart.splice(index,1)
            }else{
                console.warn("Can't remove the product as it is not inside the cart!!")
            }

            return {
                ...state,
                cart: newCart
            }
        default:
            return state
    }
}

export default reducer