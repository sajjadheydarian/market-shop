import {
    ADDITION_LIST_SHOP,
    DEDUCTION_LIST_SHOP,
    REMOVE_LIST_SHOP,
    ADD_LIST_SHOP,
    ADD_ALL_LIST_SHOP
} from "../shopTypes/shopTypes";

export const AdditionListShopList = item => {
    return {
        type: ADDITION_LIST_SHOP,
        payload: item
    }
}
export const DeductionListShopList = item => {
    return {
        type: DEDUCTION_LIST_SHOP,
        payload: item
    }
}
export const AddListShopList = item => {
    return {
        type: ADD_LIST_SHOP,
        payload: item
    }
}
export const AddAllListShopList = item => {
    return {
        type: ADD_ALL_LIST_SHOP,
        payload: item
    }
}
export const RemoveListShopList = item => {
    return {
        type: REMOVE_LIST_SHOP,
        payload: item
    }
}
