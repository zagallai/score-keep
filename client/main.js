import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

const renderPlayers = (playersList) => playersList.map((player) => (
    <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={()=>handleRemove(event,player._id)}>X</button>
    </p>
));

const handleRemove = (event, playerId) => {
    Players.remove(playerId);
}

const handleSubmit = (e) => {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    
    if (playerName) {
        e.target.playerName.value = '';
        Players.insert({name: playerName, score: 0});
    }
};

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch();

        let title = 'Score Keep';
        let jsx = (
            <div>
                <h1>{title}</h1>
                {renderPlayers(players)}
                <form onSubmit={handleSubmit}>
                    <input name="playerName" placeholder="Player Name" />
                    <button>Add Player</button>
                </form>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));    
    });
});
