import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore} from "redux-persist";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import shopReducers from "../shopReducers/shopReducers";
import shopListReducers from "../shopListReducers/shopListReducers";
import FavoritesReducers from "../favoritesReducers/FavoritesReducers";


const persistConfigShop={
    key:'root1',
    blacklist:[],
    storage,
}
const persistConfigShopList={
    key:'root2',
    blacklist:[],
    storage,
}
const persistConfigFavorite={
    key:'root3',
    blacklist:[],
    storage,
}
const persistRoot={
    key:'root',
    blacklist:[],
    storage,
}
const rootReducer = combineReducers({
    ShopReducers:persistReducer(persistConfigShop,shopReducers),
    shopListReducers:persistReducer(persistConfigShopList,shopListReducers),
    FavoritesReducers:persistReducer(persistConfigFavorite,FavoritesReducers),
})
// const shopReducers=persistReducer(persistConfigShop,shopReducers1);
// const shopListReducers=persistReducer(persistConfigShopList,shopListReducers1);
// const FavoritesReducers=persistReducer(persistConfigFavorite,FavoritesReducers1);
const persistedReducer=persistReducer(persistRoot,rootReducer)
// const persistedReducer=persistReducer(persistConfigShop,combineReducers({shopReducers,shopListReducers,FavoritesReducers}))
export const Store =createStore(persistedReducer,applyMiddleware(thunk))
export let persistor=persistStore(Store);