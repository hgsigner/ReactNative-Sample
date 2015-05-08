'use strict'

var React = require('react-native');
var {
	View,
	TouchableHighlight,
	Text,
	StyleSheet
} = React;

var DietasList = require('./DietasList')

var list = [];

for(var i = 0; i < 20; i++){
	list.push({
		guid: i,
		title: "Dieta" + i,
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolorem, veniam, pariatur repellat, aut velit sapiente beatae suscipit natus facere reprehenderit iusto? Natus ex magnam debitis eaque, id. Architecto, maxime."
	});
}

var DietasAddEntry = React.createClass({

	showDietas: function(){
		this.props.navigator.push({
			title: "Lista de Dietas",
			component: DietasList,
			passProps: {listings: list}
		});
	},

	render: function() {
		return (
			<View style={styles.container}>
				<Text style={styles.description}>DietasAdd é um aplicativo criado por Pedro Farias e Hugo Dórea.</Text>
				<TouchableHighlight
					onPress={this.showDietas}
					underlayColor='#99d9f4'
					style={styles.button}>
					<Text style={styles.buttonText}>Ver Dietas</Text>
				</TouchableHighlight>
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
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center'
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

module.exports = DietasAddEntry;