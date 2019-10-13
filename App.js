import React from 'react';
import {AppRegistry} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import Homepage from './components/Homepage';
import Eventpage from './components/Eventpage';
import Announcementpage from './components/Announcementpage';
import Librarypage from './components/Librarypage';
import Leaderspage from './components/Leaderspage';
import Profilepage from './components/Profilepage';

class App extends React.Component{


render() {
    return (
        <Router>

                <Scene key = "root">
                    <Scene key = "home" component = {Homepage} title = "Dlcf Hub" initial = {true} />
                    <Scene key = "event" component = {Eventpage} title = "Event" />
                    <Scene key = "announcement" component = {Announcementpage} title = "Announcement" />
                    <Scene key = "library" component = {Librarypage} title = "Library" />
                    <Scene key = "leaders" component = {Leaderspage} title = "Leaders" />
                    <Scene key = "profile" component = {Profilepage} title = "Profile" />
                </Scene>

        </Router>


  );

}

}
AppRegistry.registerComponent('App', () => App);
export default App;
