import {createStore , combineReducers} from "redux";
import ShopReducers from "./shopReducers/shopReducers";
import shopListReducers from "./shopListReducers/shopListReducers";
import FavoritesReducers from "./favoritesReducers/FavoritesReducers";

const Store=createStore(combineReducers({ShopReducers,FavoritesReducers,shopListReducers}))

export default Store;