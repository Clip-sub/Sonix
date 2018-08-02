import React, { Component } from 'react'

export const UserContext = React.createContext('user')

export class UserProvider extends Component {
  state = {
    user: null
  }

  render () {
    const { user, children } = this.state

    return (
      <UserContext.Provider value={user}>
        {children}
      </UserContext.Provider>
    )
  }
}

export function withUser (Component: React.ComponentType<any>) {
  return class _ extends Component {
    render () {
      return (
        <UserContext.Consumer>
          {value => <Component {...this.props} user={value} />}
        </UserContext.Consumer>
      )
    }
  }
}
