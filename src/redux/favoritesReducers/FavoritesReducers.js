import {
    ADD_LIST_FAVORITES, REMOVE_ALL_LIST_FAVORITES,
    REMOVE_LIST_FAVORITES
} from "../shopTypes/shopTypes";

const initialState = {
    listFavorite: []
}

const FavoritesReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_FAVORITES: {
            if (state.listFavorite.filter(item=>item.id===action.payload.id).length===0) return {
                    ...state,
                    listFavorite: [...state.listFavorite, action.payload]
                }
            else return {
                    ...state,
                    listFavorite: [...state.listFavorite]
                }
        }
        case REMOVE_LIST_FAVORITES:
            return {
                ...state,
                listFavorite: state.listFavorite.filter(item=>item.id!==action.payload.id)
            }
        case REMOVE_ALL_LIST_FAVORITES: {
            return {
                ...state,
                listFavorite: []
            }
        }
        default:
            return state
    }
}
export default FavoritesReducers;