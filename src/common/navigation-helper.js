import { Navigation } from 'react-native-navigation'
export { Navigation }

const NavigationHelper = {
  showOverlay: (modalName: string) => {
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

  showModal: (layout) => {
    Navigation.showModal(layout)
  },

  push: (componentId: string, layout) => {
    Navigation.push(componentId, layout)
  },

  mergeOptions: (componentId: string, options) => {
    Navigation.mergeOptions(componentId, options)
  },

  setStackRoot: (componentId: string, params) => {
    Navigation.setStackRoot(componentId, params)
  }
}

export default NavigationHelper
