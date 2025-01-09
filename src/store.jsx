import { configureStore } from "@reduxjs/toolkit";
import  ContinentManager  from "./reducers/continentMangaer.jsx";


export const store = configureStore({
    reducer : { 
        continents : ContinentManager
    }
})