import React from "react";
export declare const ThemeContext: React.Context<{
    components: {
        button: {
            variants: {
                container: string;
                outlined: string;
                text: string;
            };
            sizes: {
                sm: string;
                md: string;
                lg: string;
            };
            backgrounds: {
                primary: string;
                secondary: string;
                ternary: string;
            };
        };
    };
    palette: {
        primary: {
            main: string;
        };
        secondary: {
            main: string;
        };
        ternary: {
            main: string;
        };
    };
    animationframe: {
        button: {
            animationframe: {
                ripple: string;
                scale: string;
            };
        };
    };
    breakpoints: {
        values: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
    };
    typography: {
        global: {
            fontSize: number;
        };
        fontFamily: string;
        h1: {};
        h2: {};
        h3: {};
        h4: {};
        h5: {};
        h6: {};
        subtitle1: {
            fontSize: number;
        };
        subtitle2: {
            fontSize: number;
        };
        body1: {
            fontWeight: number;
        };
        body2: {
            fontWeight: number;
        };
    };
    transitions: {
        duration: {
            shortest: number;
            shorter: number;
            short: number;
            standard: number;
            complex: number;
            enteringScreen: number;
            leavingScreen: number;
        };
    };
    spacing: {};
    zIndex: {};
}>;
declare const ThemeProvider: ({ children, theme }: any) => JSX.Element;
export declare const useTheme: () => {
    components: {
        button: {
            variants: {
                container: string;
                outlined: string;
                text: string;
            };
            sizes: {
                sm: string;
                md: string;
                lg: string;
            };
            backgrounds: {
                primary: string;
                secondary: string;
                ternary: string;
            };
        };
    };
    palette: {
        primary: {
            main: string;
        };
        secondary: {
            main: string;
        };
        ternary: {
            main: string;
        };
    };
    animationframe: {
        button: {
            animationframe: {
                ripple: string;
                scale: string;
            };
        };
    };
    breakpoints: {
        values: {
            xs: number;
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
    };
    typography: {
        global: {
            fontSize: number;
        };
        fontFamily: string;
        h1: {};
        h2: {};
        h3: {};
        h4: {};
        h5: {};
        h6: {};
        subtitle1: {
            fontSize: number;
        };
        subtitle2: {
            fontSize: number;
        };
        body1: {
            fontWeight: number;
        };
        body2: {
            fontWeight: number;
        };
    };
    transitions: {
        duration: {
            shortest: number;
            shorter: number;
            short: number;
            standard: number;
            complex: number;
            enteringScreen: number;
            leavingScreen: number;
        };
    };
    spacing: {};
    zIndex: {};
};
export default ThemeProvider;
