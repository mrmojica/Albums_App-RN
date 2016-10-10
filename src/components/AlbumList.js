import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	//set initial state
	state = { albums: [] };


	componentWillMount() {
		//fetch data and setState
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetail key={album.title} album={album} />
			);
	}

	render() {
		console.log(this.state);
	return (
		//we want everything in this view to be scrollable (source of content)
		<ScrollView>
			{this.renderAlbums()}
		</ScrollView>
		);
	}
}


export default AlbumList;

