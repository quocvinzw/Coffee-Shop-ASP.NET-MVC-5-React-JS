import { Fragment } from 'react';
import { FooterClient, Header } from '../import';
function Client({ children }) {
    return (
        <Fragment>
            <Header></Header>
            <main id="site-content" className="flex-grow-1" role="main">
            {children}
            </main>
            <FooterClient></FooterClient>
        </Fragment>
    );
}

export default Client;