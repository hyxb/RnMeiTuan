/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
// import {name as appName} from './app.json';
import {name as appName} from './app.json';
import Main from './js/Main/main'
import Luancher from './js/Luancher/luancher';
import {Navigator} from "react-native-deprecated-custom-components"

AppRegistry.registerComponent(appName, () => Main);
// class MeiTuanDemo extends Component{
//     render():React.ReactNode{
//         return <Navigator
//     }
// }
