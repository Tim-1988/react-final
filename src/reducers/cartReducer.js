import { ADD_PRODUCT_CART, DECREASE_QUANTITY, GET_NUMBERS_CART, INCREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";
const initialState = {
    cartNumbers: 0,
    cartCost: 0,
    products: {
        iphone11: {
            name: "Apple iPhone 11",
            tagName: 'iphone11',
            price: 900.00,
            numbers: 0,
            inCart: false
        },
        iphone7: {
            name: "Apple iPhone 7",
            tagName: 'iphone7',
            price: 500.00,
            numbers: 0,
            inCart: false
        },
        galaxya71: {
            name: "Samsung Galaxy A71",
            tagName: 'galaxya71',
            price: 300.00,
            numbers: 0,
            inCart: false
        },
        galaxys20: {
            name: "Samsung Galaxy S20 plus",
            tagName: 'galaxys20',
            price: 850.00,
            numbers: 0,
            inCart: false
        }
    }
}

export default (state = initialState, action) => {
    let productSelected = "";
    switch(action.type) {
        case ADD_PRODUCT_CART:
            productSelected = { ...state.products[action.payload]}
            
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);

            return {
                ...state,
                cartNumbers: state.cartNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case GET_NUMBERS_CART:
            return{
                ...state
            }
        case INCREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1;
            return{
                ...state,
                cartNumbers: state.cartNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]};

            let newCartCost = 0;
            let newCartNumbers = 0;
            if( productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost
                newCartNumbers = state.cartNumbers
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price
                newCartNumbers = state.cartNumbers - 1
            }
            
            return{
                ...state,
                cartNumbers: newCartNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case CLEAR_PRODUCT:
            productSelected = { ...state.products[action.payload]};
            let numbersBackup = productSelected.numbers;
            productSelected.numbers = 0;
            productSelected.inCart = false;
            return {
                ...state,
                cartNumbers: state.cartNumbers - numbersBackup,
                cartCost: state.cartCost - ( numbersBackup * productSelected.price ),
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        default:
            return state;
    }
}