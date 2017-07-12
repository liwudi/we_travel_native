/**
 * Created by mapbar_front on 2017/6/1.
 */
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/HomeScreen';

import ChatTabNavigator from './components/ChatTabNavigator';

const App = StackNavigator({
    Home:{screen:HomeScreen},
    Chat:{screen:ChatTabNavigator}
});
export default App;