import {
    ADD_LIST_FAVORITES, REMOVE_ALL_LIST_FAVORITES,
    REMOVE_LIST_FAVORITES
} from "../shopTypes/shopTypes";

export const AddListFavorites=item=>{
    return{
        type:ADD_LIST_FAVORITES,
        payload:item
    }
}
export const RemoveListFavorites=item=>{
    return{
        type:REMOVE_LIST_FAVORITES,
        payload:item
    }
}
export const RemoveAllListFavorites=()=>{
    return{
        type:REMOVE_ALL_LIST_FAVORITES,
    }
}
