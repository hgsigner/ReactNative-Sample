'use strict'

var React = require('react-native');

var {
	ListView,
	TouchableHighlight,
	View,
	Text,
	StyleSheet
} = React

var ShowDiet = require('./ShowDiet');

var DietasList = React.createClass({

	getInitialState: function(){
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
		return{
			dataSource: ds.cloneWithRows(this.props.listings)
		}
	},

	rowPressed: function(propertyGuid) {
	  var property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];
	  this.props.navigator.push({
	  	title: property.title,
	  	component: ShowDiet,
	  	passProps: {property: property}
	  });
	},

	renderRow: function(rowData, sectionID, rowID) {
 
	  return (
	    <TouchableHighlight 
	    		onPress={() => this.rowPressed(rowData.guid)}
	        underlayColor='#dddddd'>
	      <View>
	        <View style={styles.rowContainer}>
	          <View  style={styles.textContainer}>
	            <Text style={styles.title}>{rowData.title}</Text>
	            <Text 
	            	numberOfLines={1}>
	            		{rowData.description}
	            </Text>
	          </View>
	        </View>
	        <View style={styles.separator}/>
	      </View>
	    </TouchableHighlight>
	  );
  },

	render: function() {
		return (
			<ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}/>
		);
	}

});

var styles = StyleSheet.create({
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    height: 60
  }
});

module.exports = DietasList;