import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';

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
                <FlipMove maintainContainerHeight={true}>
                    {this.renderPlayers()}
                </FlipMove>
            </div>
        );
    }
};

PlayerList.propTypes = {
    players: PropTypes.array.isRequired
}
