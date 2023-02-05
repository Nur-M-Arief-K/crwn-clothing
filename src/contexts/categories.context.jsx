import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments, getCategoresAndDocuments } from "../utils/firebase/firebase.utils";
// import SHOP_DATA from "../shop-data";

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = (props) => {
    const { children } = props;
    const [categoriesMap, setCategoriesMap] = useState({});

    //To add collection categories to firestore db
    // useEffect(() => {
    //     addCollectionAndDocuments("categories", SHOP_DATA);
    // }, []);

    //to fetch collection categories from db
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoresAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const value = {
        categoriesMap
    }
    return (
        <CategoriesContext.Provider value={value}>{ children }</CategoriesContext.Provider>
    )
}

