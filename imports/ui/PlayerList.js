import React from 'react';
import FlipMove from 'react-flip-move';
import PropTypes from 'prop-types';

//get children components
import Player from './Player';

export default class PlayerList extends React.Component {
	renderPlayers() {
		if (this.props.players.length ===0) {
			return (
				<div className='item'>
					<p className='item__message item__message--empty'>Add your first player to begin</p>
				</div>
			);
		} else {
			return this.props.players.map(player => <Player key={player._id} player={player}/>);
		}
	}
	render() {
		return (
			<FlipMove duration={750} easing='ease-out' maintainContainerHeight={true}>
				{this.renderPlayers()}
			</FlipMove>
		)
	}
};

PlayerList.propTypes = {
	players: PropTypes.array.isRequired
}

