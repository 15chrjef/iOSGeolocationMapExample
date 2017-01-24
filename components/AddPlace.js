import React, { Component } from 'react';
import {
	Text,
	TextInput,
	TouchableHighlight,
	View,
	StyleSheet,
	AlertIOS
} from 'react-native';
import dismissKeyboard from 'dismissKeyboard';

const Error = (props) => {
	return (
		<Text style={styles.error}>{props.message}</Text>
	)
}

export default class AddPlace extends Component {
	constructor() {
		super()
		this.state = {
			title: '',
			latitude: '',
			longitude: '',
			titleError: '',
			latitudeError: '',
			longitudeError: ''
		}
	}
	handleAddPlace() {
		const { title, latitude, longitude } = this.state;
		let titleError = '';
		let latitudeError = '';
		let longitudeError = '';
		if(!title) {
			titleError = 'Name is required.';
		}
		if(!latitude) {
			latitudeError = 'Latitude is required.';
		}
		if(!longitude) {
			longitudeError = 'Longitude is required.';
		}
		this.setState({
			titleError,
			latitudeError,
			longitudeError
		})
		const isError = titleError || latitudeError || longitudeError;
				console.log(this.state, isError)

		if(!isError) {
			this.props.onAddPlace({
				title,
				latitude: parseFloat(latitude),
				longitude: parseFloat(longitude)
			})

			AlertIOS.alert(
				'Place added',
				'Your place is added to the map. Click on the Favorites tab to view.'
			);
		}
		dismissKeyboard();
	}
	render() {
		return (
			<View style={styles.view}>
				<Text style={styles.text}>Title</Text>
				<TextInput
					onChangeText={(title) => this.setState({title})}
					style={styles.textInput}
				></TextInput>
				<Error message={this.state.titleError}/>
				<Text style={styles.text}>Latitude</Text>
				<TextInput
					onChangeText={(latitude) => this.setState({latitude})}
					keyboardType='numbers-and-punctuation'
					style={styles.textInput}
				></TextInput>
				<Error message={this.state.latitudeError}/>
				<Text style={styles.text}>Longitude</Text>
				<TextInput
					onChangeText={(longitude) => this.setState({longitude})}
					keyboardType='numbers-and-punctuation'
					style={styles.textInput}
				></TextInput>
				<Error message={this.state.longitudeError}/>
				<TouchableHighlight onPress={this.handleAddPlace.bind(this)} style={styles.button}>
					<Text style={styles.buttonText}>Add Place</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	view: {
		paddingTop: 50,
		paddingLeft: 30,
		paddingRight: 30,
		backgroundColor: '#fed',
		flex: 1
	},
	text: {
		color: '#333333',
		marginTop: 15,
		marginBottom: 5
	},
	textInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 5
	},
	button: {
		backgroundColor: '#ff7f50',
		padding:12,
		borderRadius: 6,
		marginTop: 10
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	}
})