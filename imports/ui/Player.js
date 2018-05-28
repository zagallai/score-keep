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
            <div key={this.props.player._id} className="item">
                <div className="player">
                    <div>
                        <h3 className="player__name">{this.props.player.name}</h3>
                        <p className="player__stats">
                            {this.props.player.rank} {this.props.player.position} {this.props.player.score} point(s).</p>
                    </div>
                    <div className="player__actions">
                        <button className="button button--round" onClick={()=>this.handleAdd(event, this.props.player._id)}>+1</button>
                        <button className="button button--round" onClick={()=>this.handleSub(event, this.props.player._id)}>-1</button>
                        <button className="button button--round" onClick={()=>this.handleRemove(event, this.props.player._id)}>X</button>
                    </div>
                </div>
            </div>
        );
    }
}

Player.propTypes = {
    player: PropTypes.object
};
