import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('screen');

export const COLORS = {
    primary: '#488350',
    title: '#072F4A',
    lightGrey: '#D3D6D6',
    grey: '#C1C0C9',
    blue: '#087BB6',
    yellow: '#F4D03F',
    white: "#FFFFFF",
    black: "#222222",
    secondary: "#ABD8BB",
    // grey: "#CCCCCC"
};

export const SIZES = {
    h1: 22,
    h2: 20,
    h3: 18,
    h4: 16,
    h5: 14,
    h6: 12,

    width,
    height,
}