import {API_PRODUCT} from "../shopTypes/shopTypes";
import {ApiProduct} from "../../ApiProduct";

const initialState={
    shop:ApiProduct
}

const ShopReducers = (state=initialState,action) => {
  switch (action.type){
      case API_PRODUCT:return{
            ...state
      }
      default:return state
  }
}
export default ShopReducers;