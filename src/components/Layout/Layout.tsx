import * as React from 'react';
import Header from "../../shared/Header/Header";

class Layout extends React.Component {
    render() {
        return (
            <div className={"bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200"}>
                <Header />
                { this.props.children }
                <h1>Footer</h1>
            </div>
        );
    }
}

export default Layout;