import {
    ADDITION_LIST_SHOP,
    DEDUCTION_LIST_SHOP,
    REMOVE_LIST_SHOP,
    ADD_LIST_SHOP,
    ADD_ALL_LIST_SHOP
} from "../shopTypes/shopTypes";


const initialState = {
    listShop: []
}

const shopListReducers = (state=initialState,action) => {
    switch (action.type) {
        case ADD_LIST_SHOP: {
            if (state.listShop.filter(item=>item.id===action.payload.id).length===0) {
                const item=action.payload;
                item.number=++item.number;
                return {
                    ...state,
                    listShop: [...state.listShop, item]
                }
            } else return {
                    ...state,
                    listShop: [...state.listShop]
                }
        }
        case ADD_ALL_LIST_SHOP: {
            const list=[];
            action.payload.map(item=>{
                item.number=1;
                state.listShop.push(item)
            })
            state.listShop.map(item=>{
                if (list.filter(item2=>item2.id===item.id).length===0){
                    list.push(item)
                }
            })
            return {
                ...state,
                listShop: list
            }
        }
        case ADDITION_LIST_SHOP: {
            state.listShop[state.listShop.findIndex(x => x.id === action.payload.id)].number++;
            return {
                ...state,
                listShop: [...state.listShop]
            }
        }
        case REMOVE_LIST_SHOP:return {
            ...state,
            listShop: state.listShop.filter(item=>item.id!==action.payload.id)
        }
        case DEDUCTION_LIST_SHOP: {
            if (state.listShop[state.listShop.findIndex(x => x.id === action.payload.id)].number > 0) {
                state.listShop[state.listShop.findIndex(x => x.id === action.payload.id)].number--;
            }
            return {
                ...state,
                listShop:[...state.listShop]
            }
        }
        default:return state
    }
}
export default shopListReducers;