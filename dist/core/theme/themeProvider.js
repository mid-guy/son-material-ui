import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from "react";
import { defaultTheme } from "./createTheme";
export const ThemeContext = createContext(defaultTheme);
const ThemeProvider = ({ children, theme }) => {
    const _theme = useMemo(() => theme, []);
    return (_jsx(ThemeContext.Provider, Object.assign({ value: _theme }, { children: children })));
};
export const useTheme = () => {
    const theme = useContext(ThemeContext);
    return theme;
};
export default ThemeProvider;
