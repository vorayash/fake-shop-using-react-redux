import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const reducers  = combineReducers({
    allProducts : productReducer,
    selectedProduct :selectedProductReducer
}); 

export default reducers;