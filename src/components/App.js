import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import EventFrom from './EventFrom'
import AppContext from '../contexts/AppContext'
import Events from './Events'
import reducer from '../reduers'


const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventFrom />
        <Events />
      </div>
    </AppContext.Provider>
  )
}

export default App;
