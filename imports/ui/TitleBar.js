import React from 'react';
import PropTypes from 'prop-types';

export default class TitleBar extends React.Component {
    renderSubtitle() {
        if (this.props.subtitle) {
            return <h5>{this.props.subtitle}</h5>
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.renderSubtitle()}
            </div>
        );
    }
}

TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
};