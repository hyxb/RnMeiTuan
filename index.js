/**
 * @format
 */
import React,{Component} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './js/Main/main'
import Luancher from './js/Luancher/luancher';
import {Navigator} from "react-native-deprecated-custom-components"

class MeiTuan extends Component{
    render():React.ReactNode {
        return <Navigator
            initialRoute={{
                name: "luncher",
                component: Luancher
            }
            }
            renderScene={(router,navigator) => {
                let Component = router.component;
                return <Component {...router.params} navigator={navigator}/>;
            }}
            />;
    }}
AppRegistry.registerComponent(appName,() => MeiTuan);
