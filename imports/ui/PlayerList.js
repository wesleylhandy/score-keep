import React from 'react';
import PropTypes from 'prop-types';

//get children components
import Player from './Player';

export default class PlayerList extends React.Component {
	renderPlayers() {
		if (this.props.players.length ===0) {
			return <p>Add your first player to begin</p>;
		} else {
			return this.props.players.map(player => <Player key={player._id} player={player}/>);
		}
	}
	render() {
		return (
			<div>
				{this.renderPlayers()}
			</div>
		)
	}
};

PlayerList.propTypes = {
	players: PropTypes.array.isRequired
}

