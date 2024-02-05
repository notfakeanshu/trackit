import { ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
}

export interface ThemeChangerProps {
    extended?: boolean;
}
export interface Style {
    className : string;
}