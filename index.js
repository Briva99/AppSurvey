/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Gaji from './src/pages/gaji';
import Usaha from './src/pages/usaha';

AppRegistry.registerComponent(appName, () => Usaha);
