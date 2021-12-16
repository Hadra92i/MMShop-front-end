import { css } from "styled-components";

// Media queries for smartphones devices
export const mobile = props => {
    return css`
        @media only screen and (max-width : 480px){
            ${props}
        }
    `
}
