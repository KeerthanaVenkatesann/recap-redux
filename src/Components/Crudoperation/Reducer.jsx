import { ADD_ITEM, DELETE_ITEM, FETCH_ITEMS, FETCH_ITEM_BY_ID, UPDATE_ITEM } from "./Type";

const initialState = {
    items: [],
    selectedItem: null
};

const itemReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case UPDATE_ITEM:
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ? action.payload : item
                )
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };
        case FETCH_ITEMS:
            if (Array.isArray(action.payload)) {
                return {
                    ...state,
                    items: action.payload
                };
            } else {
                return state;
            }
        case FETCH_ITEM_BY_ID:
            const selectedItem = state.items.find(item => item.id === action.payload);
            return {
                ...state,
                selectedItem: selectedItem ? selectedItem : null
            };
        default:
            return state;
    }
};

export default itemReducer;
