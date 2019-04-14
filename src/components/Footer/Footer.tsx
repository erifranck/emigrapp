import * as React from 'react';
import {FooterProps} from "components/Footer/Footer.props";
import {styled, withTheme} from "theme";

export const FooterComponent = (props: FooterProps) => (
    <footer className={props.className}>
    </footer>
)

export const Footer = withTheme(styled(FooterComponent)`
    height: 200px;
    background-color: ${props => props.theme.primaryColor};
`);
