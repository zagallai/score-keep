import React from 'react';
import PropTypes from 'prop-types';

import Player from './Player';

export default class PlayerList extends React.Component {
     renderPlayers() {
         if (this.props.players.length) {
            return this.props.players.map((player) => {
                return <Player key={player._id} player={player}/>;
            });    
         } else {
             return (
                <div className="item">
                    <p className="item__message">Please add your first player...</p>
                </div>
             );
         }
    }
    render() {
        return (
            <div>
                {this.renderPlayers()}
            </div>
        );
    }
};

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}
