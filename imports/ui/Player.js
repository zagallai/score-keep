import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class Player extends React.Component {
    handleAdd = (event, playerId) => {
        Players.update(playerId, {$inc: {score: 1}});
    }
    
    handleSub = (event, playerId) => {
        Players.update(playerId, {$inc: {score: -1}});  
    }
    
    handleRemove = (event, playerId) => {
        Players.remove(playerId);
    }

    render() {
        return (
            <p key={this.props.player._id}>
                {this.props.player.name} has {this.props.player.score} point(s).
                <button onClick={()=>this.handleAdd(event, this.props.player._id)}>+1</button>
                <button onClick={()=>this.handleSub(event, this.props.player._id)}>-1</button>
                <button onClick={()=>this.handleRemove(event, this.props.player._id)}>X</button>
            </p>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object
};
