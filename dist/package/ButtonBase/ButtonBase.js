var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import getButtonCss from "./getButtonCss";
import { forwardRef } from "react";
import { useTheme } from "../../core/theme/themeProvider";
export const ButtonBase = forwardRef(function (props, ref) {
    const theme = useTheme();
    const { onClick, isVisible, animationframe, className, fullWidth } = props, rest = __rest(props, ["onClick", "isVisible", "animationframe", "className", "fullWidth"]);
    const css = getButtonCss(theme, props);
    return (_jsx("button", Object.assign({}, rest, { css: css, ref: ref, className: className, onClick: (e) => _onClick(e, animationframe, onClick) })));
});
ButtonBase.defaultProps = {
    variant: "container",
    animationframe: "ripple",
    size: "sm",
    fullWidth: false,
    background: "primary",
    isVisible: false,
    type: "button",
};
function _onClick(e, animationframe = "ripple", onClick) {
    if (animationframe === "ripple") {
        generateRippleButton(e);
    }
    onClick && onClick(e);
}
function generateRippleButton(e) {
    const clientRect = e.nativeEvent;
    const x = clientRect.offsetX;
    const y = clientRect.offsetY;
    const ripple = document.createElement("span");
    e.target.appendChild(ripple);
    ripple.onanimationend = () => {
        ripple.remove();
    };
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
}
