import React, { CSSProperties, ReactNode } from "react";
import { animationframes, backgrounds, sizes, types, variants } from "./constants";
export declare const ButtonBase: React.ForwardRefExoticComponent<BaseProps & React.RefAttributes<HTMLButtonElement>>;
export interface ButtonPropsVariantOverrides {
}
export interface ButtonPropsBackgroundOverrides {
}
export interface ButtonPropsSizeOverrides {
}
export interface ButtonPropsAnimationFrame {
}
export declare type OverridableStringUnion<A, B> = A | keyof B;
export declare type BaseProps = {
    /**
     * The variant to use.
     * @default container
     */
    variant?: OverridableStringUnion<keyof typeof variants, ButtonPropsVariantOverrides>;
    /**
     * The size to use.
     * @default primary
     */
    background?: OverridableStringUnion<keyof typeof backgrounds, ButtonPropsBackgroundOverrides>;
    /**
     * The size to use.
     * @default sm
     */
    size?: keyof typeof sizes;
    /**
     * the fullWidth to use
     * @default false
     */
    fullWidth?: boolean;
    /**
     * the startIcon to add icon component
     * @default {}
     */
    startIcon?: ReactNode;
    /**
     * the endIcon to add icon component
     * @default {}
     */
    endIcon?: ReactNode;
    /**
     * the dense to use
     * @default sm
     */
    dense?: any;
    /**
     * The disable to disable button.
     * @default false
     */
    disabled?: boolean;
    /**
     * The disableElevation to disable box-shadow.
     * @default false
     */
    disableElevation?: boolean;
    /**
     * The type to change type of button.
     * @default button
     */
    type?: keyof typeof types;
    /**
     * The visible to use that component should be visible
     * @default boolean
     */
    isVisible?: boolean;
    /**
     * The animation perform to use when user touch on button.
     * @default ripple
     */
    animationframe?: OverridableStringUnion<keyof typeof animationframes, ButtonPropsAnimationFrame>;
    /**
     * The Style to use as html style.
     * @default {}
     */
    style?: CSSProperties;
    /**
     * The Style to use as html style.
     * @default {}
     */
    onClick?: any;
    /**
     * className to use style
     * @default {}
     */
    className?: string;
    /**
     * Children to use
     * @default {}
     */
    children: ReactNode;
};
export interface ButtonTypeMap<D extends React.ElementType = "button"> {
    props: BaseProps;
    defaultComponent: D;
}
