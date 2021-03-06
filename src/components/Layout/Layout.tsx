import * as React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

class Layout extends React.Component {
    render() {
        return (
            <div className={"bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200"}>
                <Header />
                { this.props.children }
                <Footer />
            </div>
        );
    }
}

export default Layout;