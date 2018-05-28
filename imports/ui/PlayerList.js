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
                <div>
                    <h4>Please add a player...</h4>
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
