import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'

const TAB_ICON_SIZE = 20

export function loadIconAssets () {
  return new Promise((resolve, reject) => {
    Promise.all([
      Ionicons.getImageSource('ios-home', TAB_ICON_SIZE),
      Ionicons.getImageSource('ios-sunny', TAB_ICON_SIZE),
      Entypo.getImageSource('location-pin', TAB_ICON_SIZE),
      Ionicons.getImageSource('ios-notifications', TAB_ICON_SIZE),
      Ionicons.getImageSource('ios-person', TAB_ICON_SIZE)
    ])
      .then(values => {
        resolve(values)
      })
      .catch(e => reject(e))
  })
}
