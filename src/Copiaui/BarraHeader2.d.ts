/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BarraHeaderOverridesProps = {
    BarraHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    "logo-oficial-128x143 1"?: PrimitiveOverrideProps<ImageProps>;
    CIT?: PrimitiveOverrideProps<TextProps>;
    Button3862483?: PrimitiveOverrideProps<ButtonProps>;
    Button38635365?: PrimitiveOverrideProps<ButtonProps>;
    Button38635369?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 321"?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
} & EscapeHatchProps;
export declare type BarraHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    A?: React.ReactNode;
} & {
    overrides?: BarraHeaderOverridesProps | undefined | null;
}>;
export default function BarraHeader(props: BarraHeaderProps): React.ReactElement;
