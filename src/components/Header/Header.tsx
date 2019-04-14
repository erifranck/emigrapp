import * as React from 'react';
import {styled, withTheme} from "theme";
import {Props} from "components/Header/Header.props";
import { Parallax} from 'react-parallax';

const HeaderComponent = (props: Props) => (
    <Parallax
        blur={3}
        bgImage={'/assets/graphic15.png'}
        bgImageAlt="the cat"
        strength={200}
    >
        <div className={props.className}>
            <div className={'header-title'}>
                <h1>Andanza</h1>
                <p>Guias para migrantes</p>
            </div>
        </div>
    </Parallax>
);

export const Header = withTheme(styled(HeaderComponent)`
    width: 100%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    box-shadow: ${({theme}) => theme.depth2};
    padding-bottom: 20px;
    margin-bottom: 10px;
    .header-title {
        z-index: 2;
    }
    .button-content {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            margin-right: 25px;
            &:last-child {
                margin-right: 0px;
            }
        }
    }
    h1, p {
        text-align: center
        font-family: ${({theme}) => theme.fontFamily};
    }
    h1 {
        color: #fff;
        font-size: ${({theme}) => theme.fontTitle};
    }
    p {
        color: #fff;
        font-size: ${({theme}) => theme.fontSubTitle};
    }
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
`);
