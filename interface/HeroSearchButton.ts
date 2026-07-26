import React from "react";

export interface HeroSearchButtonProp{
    FetchURLData: (e: React.MouseEvent<HTMLButtonElement>) => void;
    loading: boolean;
    disableButton: boolean;
}