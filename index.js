/** @format */
import { Navigation } from 'react-native-navigation'
import { start } from './src/app'
import { loadIconAssets } from './src/asset-loader'

Navigation.events().registerAppLaunchedListener(() => {
  loadIconAssets()
    .then(assets => start(assets))
    .catch(e => console.log(e))
})
