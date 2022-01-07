require('./src/styles/global.scss');

const React = require('react');
const Layout = require('./src/components/Layout/Layout').default;

// Wrap all pages in the Layout component
exports.wrapPageElement = ({ element, props }) => {
    return (
        <Layout>{ element }</Layout>
    );
}