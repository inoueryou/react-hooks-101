import React, { useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import EventFrom from './EventFrom'
import AppContext from '../contexts/AppContext'
import Events from './Events'
import OperationLogs from './OperationLogs'
import reducer from '../reduers'

const App_KEY = 'appwithRedux'

const App = () => {
  const appState = localStorage.getItem(App_KEY)
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(App_KEY, JSON.stringify(state))
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventFrom />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  )
}

export default App;
