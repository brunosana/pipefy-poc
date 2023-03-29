import { createGlobalStyle } from "styled-components";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    preload: true,
    subsets: ['latin']
})

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        svg {
            color: #03C988;
        }
        background-color: #13005A;
        color: #03C988;
        font-size: 16px;
        font-family: ${roboto.style.fontFamily};

        @media screen and (max-width: 1300px){
            font-size: 12px;
        }
    }

`;