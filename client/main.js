import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

const renderPlayers = (playersList) => playersList.map((player) => (
    <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={()=>handleAdd(event, player._id)}>+1</button>
        <button onClick={()=>handleSub(event, player._id)}>-1</button>
        <button onClick={()=>handleRemove(event, player._id)}>X</button>
    </p>
));

const handleAdd = (event, playerId) => {
    Players.update(playerId, {$inc: {score: 1}});
}

const handleSub = (event, playerId) => {
    Players.update(playerId, {$inc: {score: -1}});
}

const handleRemove = (event, playerId) => {
    Players.remove(playerId);
}

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find().fetch();

        let title = 'Score Keep App';
        let jsx = (
            <div>
                <TitleBar title={title}/>
                {renderPlayers(players)}
                <AddPlayer score={50}/>
            </div>
        );
        ReactDOM.render(jsx, document.getElementById('app'));    
    });
});
