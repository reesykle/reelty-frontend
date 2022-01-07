import * as React from 'react';
import { Link } from 'gatsby';

class Search extends React.Component {
    render() {
        return (
            <main>
                <h1>Search View</h1>
                <ul>
                    <li><Link to={"/"}>Back Home</Link></li>
                </ul>
            </main>
        )
    }
}

export default Search;