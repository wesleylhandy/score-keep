import React from 'react';
import PropTypes from 'prop-types';

//get children components
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<TitleBar title={this.props.title} subtitle={null}/>
				<PlayerList players={this.props.players}/>
				<AddPlayer/>
			</div>
		)
	}
};

App.propTypes = {
	title: PropTypes.string.isRequired,
	players: PropTypes.array.isRequired
}