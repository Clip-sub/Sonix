import { Navigation } from 'react-native-navigation'
export { Navigation }

const NavigationHelper = {
  showModal: (modalName: string) => {
    Navigation.showOverlay({
      component: {
        name: modalName,
        options: {
          overlay: {
            interceptTouchOutside: true
          }
        }
      }
    })
  },

  push: (componentId: string, layout) => {
    Navigation.push(componentId, layout)
  },

  mergeOptions: (componentId: string, options) => {
    Navigation.mergeOptions(componentId, options)
  }
}

export default NavigationHelper
