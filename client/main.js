import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';


import {Players} from './../imports/api/players';

import App from './../imports/ui/App';

Meteor.startup(()=>{
	//tracker will watch for changes and rerender page
	Tracker.autorun(()=>{
		let players = Players.find({}, {sort: {score: -1}}).fetch();
		let title = 'Score Keep';
		// let subtitle = 'Created by Wesley L. Handy';
		ReactDom.render(<App title={title} players={players}/>, document.getElementById('app'));
	});
});