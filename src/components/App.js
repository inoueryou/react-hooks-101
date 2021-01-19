import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import EventFrom from './EventFrom'
import AppContext from '../contexts/AppContext'
import Events from './Events'
import OperationLogs from './OperationLogs'
import reducer from '../reduers'


const App = () => {
  const initialState = {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)

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
