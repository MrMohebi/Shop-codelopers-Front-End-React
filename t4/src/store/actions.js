// # Action name should be **setTheme**

import store from './index'


export const setTheme = () => {
    store.dispatch({
        type: "CHANGE_THEME"
    })
};
