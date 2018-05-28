import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.props.subtitle}</h1>
            </div>
        );
    }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};