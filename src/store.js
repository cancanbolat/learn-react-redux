import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./stores/auth";
import counterReducer from "./stores/counter";
import siteReducer from "./stores/site";

export default configureStore({
    reducer: {
        counter: counterReducer,
        site: siteReducer,
        auth: authReducer
    }
})