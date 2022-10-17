import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "../services/ProductApi";

const store = configureStore({
    reducer: {
        productApi: ProductApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ProductApi.middleware),
});

export default store;