import * as React from 'react';
import {Fragment} from "react";
import {Provider} from "react-redux"
import {ThemeProvider, theme} from 'theme'
import {Header} from "components/Header/Header";
import {Footer} from "components/Footer/Footer";
import {createStore} from "store/createStore";
import {Stories} from "components/Stories/Stories";
import {Tips} from "components/Tips/Tips";
import {Resources} from "components/Resources/Resources";

const store = createStore();
export class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Fragment>
                        <Header />
                        <Stories />
                        <Tips />
                        <Resources />
                        <Footer/>
                    </Fragment>
                </ThemeProvider>
            </Provider>
        )
    }
}
