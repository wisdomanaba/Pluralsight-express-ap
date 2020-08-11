import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { ConnectedDashboard } from './Dashboard'

export const Main = () => {
      return(
            <div>
                  <h1>From Javascript</h1>
<!--                   <Provider store={ store }>
                        <ConnectedDashboard />
                  </Provider> -->
            </div>
      )
}
