import { createStore } from 'redux'
import { rootReducer }   from './reducers'
import works from '../data/works'


export default function() {

  const initialState = {
    filter: 'ALL',
    menu: 'closed',
    filteredWorks: works,
    loading: {
      initiallyLoaded: false,
      isLoading: false,
      progress: 0
    },
    caseLoading: {
      isLoading: false
    }
  }

  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
