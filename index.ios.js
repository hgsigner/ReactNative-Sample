'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;

var DietasAddEntry = require('./DietasAddEntry')

var DietasAdd = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: "DietasAdd",
          backButtonTitle: "Voltar",
          component: DietasAddEntry
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('DietasAdd', () => DietasAdd);
