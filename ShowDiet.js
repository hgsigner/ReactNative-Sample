'use strict'

var React = require('react-native');

var {
	View,
	Text,
	StyleSheet
} = React;

var ShowDiet = React.createClass({

	render: function() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.property.title}</Text>
				<Text>{this.props.property.description}</Text>
			</View>
		);
	}

});

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
  },
	buttonText: {
	  fontSize: 18,
	  color: 'white',
	  alignSelf: 'center'
	},
	button: {
	  height: 36,
	  flex: 1,
	  flexDirection: 'row',
	  backgroundColor: '#48BBEC',
	  borderColor: '#48BBEC',
	  borderWidth: 1,
	  borderRadius: 8,
	  marginBottom: 10,
	  alignSelf: 'stretch',
	  justifyContent: 'center'
	}
});

module.exports = ShowDiet;