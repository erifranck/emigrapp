import * as React from 'react';
import {DividerProps} from "components/Divider/Divider.props";
import {styled, withTheme} from "theme";

const DividerComponent = (props: DividerProps) => (
   <div className={props.className}>
       <p>
           {props.title}
       </p>
   </div>
);

export const Divider = withTheme(styled(DividerComponent)`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.secondaryColor};
    p {
        fontSize: ${props => props.theme.fontSubTitle};
        color: ${props => props.theme.white};
    }
`);
