import { combineReducers } from 'redux'
import Actions from './actions'
import works from '../data/works'

const rootReducer = combineReducers({
  filter,
  menu,
  filteredWorks,
  loading,
  caseLoading
})

function filter(state, action) {

  switch (action.type) {

    case 'SET_FILTER':
      return action.filter

    default:
      return 'ALL'
  }
}

function menu(state, action) {

  switch (action.type) {

    case 'TOGGLE_MENU':
      return {
        filter: state.filter,
        menu: action.menu
      }

    default:
      return {filter: 'ALL', menu: 'opened'}
  }

}

function filteredWorks(state, action) {

  switch (action.type) {
    case 'SET_FILTER':
      let filter = action.filter.toLowerCase()
      if (filter === 'all'){
        return works
      } else {
        return works.filter(work => work.type === filter)
      }

    default:
      return works
  }

}

function loading(state, action) {

  switch (action.type) {

    case 'START_PRELOAD':
      return {
        initiallyLoaded: true,
        isLoading: true,
        progress: 0
      }

    case 'SET_PROGRESS':
      return {
        initiallyLoaded: true,
        isLoading: state.isLoading,
        progress: action.progress
      }

    case 'SET_INITIALLY_LOADED':
      return {
        initiallyLoaded: true,
        isLoading: false,
        progress: 100
      }

    case 'LOADED':
      return {
        isLoading: false,
        progress: 100
      }

    case 'SET_FILTER':
      return {
        initiallyLoaded: true,
        isLoading: false,
        progress: 20
      }

    default:
      return {
        initiallyLoaded: false,
        isLoading: false,
        progress: 20
      }

  }

}

function caseLoading(state, action) {

  switch (action.type) {

    case 'SET_LOADING':
        return {
          isLoading: action.isLoading
        }
    default:
      return {
        isLoading: false
      }
  }


}

export { rootReducer }
