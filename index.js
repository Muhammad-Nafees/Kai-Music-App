import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './store';
import TrackPlayer from "react-native-track-player"


const UserApp = () => {
return(
<>
    
  <Provider store={store}>
    <App />
  </Provider>
</>
    )

}

TrackPlayer.registerPlaybackService(()=>require("./service"))
AppRegistry.registerComponent(appName, () => UserApp);
