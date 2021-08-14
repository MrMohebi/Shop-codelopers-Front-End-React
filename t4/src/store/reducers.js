// # Reducer name should be **themeReducer**

export const themeReducer = (store = {theme:"LIGHT"}, action) => {
    if(action.type === "CHANGE_THEME"){
        return store.theme === "LIGHT" ? {theme:"DARK"} : {theme:"LIGHT"}
    }else {
        return store;
    }
};
