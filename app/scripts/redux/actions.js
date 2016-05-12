export default {
  SET_FILTER: function(filter){
    return {
      type: 'SET_FILTER',
      filter
    }
  },
  SET_INITIALLY_LOADED: function(){
    return {
      type: "SET_INITIALLY_LOADED",
      initiallyLoaded: true,
      isLoading: false,
      progress: 0
    }
  },
  SET_LOADING: function(isLoading){
    return {
      type: 'SET_LOADING',
      isLoading: isLoading
    }
  }
}
