import React from 'react';
import {AppRegistry} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Librarypage from './Librarypage';
import LibrarySummarypage from './LibrarySummarypage';

class LibraryRouter extends React.Component{

    state ={
        title : 'Sunday'
    }
render() {
    return (
        <Router>
            <Scene key = "libraryroot">
                <Scene key = "library" component = {Librarypage} title = "Library" initial = {true} />
                <Scene key = "librarysummary" component = {LibrarySummarypage} title = "Library"  />
            </Scene>
        </Router>


  );

}

}

export default LibraryRouter;
