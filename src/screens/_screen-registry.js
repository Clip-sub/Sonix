
import { Navigation } from 'react-native-navigation'
import { PostContent } from './post-content'

export function registerScreens () {
  Navigation.registerComponent(`screen.PostContent`, () => PostContent)
}
