/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Gaji from './src/pages/gaji';
import Usaha from './src/pages/usaha';
import Login from './src/pages/Login';
import GetStarted from './src/pages/GetStarted';
import DaftarSurvey from './src/pages/DaftarSurvey';
import report from './src/pages/report';

AppRegistry.registerComponent(appName, () => report);
