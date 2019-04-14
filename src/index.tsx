import * as React from 'react';
import {render} from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import {App} from "layouts/App/App";
import {Fragment} from "react";
import {theme} from "theme";

const GlobalStyle = createGlobalStyle`
    html {
        font-family: ${theme.fontFamily};
    }
    * {
        margin: 0px;
        padding: 0px;
    }
    body {
        background-color: #fefefe;
    }
`

render(
   <Fragment>
       <GlobalStyle />
       <App />
   </Fragment> , document.getElementById('app'))
