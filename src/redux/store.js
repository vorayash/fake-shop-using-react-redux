import {createStore} from "redux";
import reducers from "./reducers/index"

const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //second argument is state here is empty state

export default store;