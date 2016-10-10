import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


//add more deconstructing 
// const AlbumDetail = ( {album} ) => {
	// const {title, artist, thumnail_image, url } = album;
// 	return (
// 		<Card>
// 			<CardSection>
// 				<View>
// 					<Image source={{ uri: thumnail_image }} />
// 				</View>
// 				<View style={styles.headerContentStyle}>
// 					<Text>{title}</Text>
// 					<Text>{artist}</Text>
// 				</View>
// 			</CardSection>
// 		</Card>

// 	);
// };

const AlbumDetail = (props) => {
	return (
		//Card wrap was originally a text tag.  we wrap around Card component
		// and will render the children (props.children)
		//we create two view sections to divide the content (cardsection of image / title + artist)
		<Card>
			<CardSection>
				<View style={styles.thumbnailContainerStyle}>
					<Image 
					source={{ uri: props.album.thumbnail_image }}
					style={styles.thumbnailStyle}
					/>
				</View>
				<View style={styles.headerContentStyle}>
					<Text style={styles.headerTextStyle}>{props.album.title}</Text>
					<Text>{props.album.artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image
				source={{ uri: props.album.image }}  
				style={styles.imageStyle}		
				/>
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(props.album.url)}>
				Buy Now
				</Button>
			</CardSection>
		</Card>

	);
};

//onPress on the button can be named anything
//we use Linking.openURL() to send the user to the browser url we want
//wrapping button around text allows us to call props.children in the button component to add text.
//alternative is to add a text attribute containing text/string

const styles = {
	headerContentStyle: {
		//sets as a list
		flexDirection: 'column',
		//sets spacing
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		//to take full with trick (flex + width)
		flex: 1,
		width: null
	}

};


export default AlbumDetail;
