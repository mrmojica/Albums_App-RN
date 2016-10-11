// Index.android.js - place code here for Android!!!

//Import a library to help create a component
import React from 'react';
// when you import reactnative library this code means 
//you only want the text library. + importing AppRegistry library.
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


// const App = () => {
//   return (
//       <Text>Some Text</Text>
//     );
// };

// Create a component (below code is alternate refactor code);
const App = () => (
      //added flex:1 style to allow scrolling (part of 2 steps, needs to be added to root)
      <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
      
);


// Render it to the device (match string argument to project name and the component to render)
//(Most top level component requires AppRegistry)
AppRegistry.registerComponent('albums', () => App);

