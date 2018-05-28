import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
    handleSubmit = (e) => {
        let playerName = e.target.playerName.value;
        e.preventDefault();
        
        if (playerName) {
            e.target.playerName.value = '';
            Players.insert({name: playerName, score: this.props.score});
        }
    };

    render() {
        return (
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="form__input" name="playerName" placeholder="Player Name" />
                    <button className="button">Add Player</button>
                </form>
            </div>
        );
    }
}

AddPlayer.propTypes = {
    score: PropTypes.number
};

AddPlayer.defaultProps = {
    score: 0
};