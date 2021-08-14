import React from "react";
import { THEME_TYPE } from "../constants";
import {setTheme} from "../store/actions"
import {useSelector} from "react-redux";


const ThemeSwitcher = () => {
    let themeMode = useSelector((state) => state.theme ?? "LIGHT");
  
  const handleThemeChange = () => {
      setTheme()
  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
