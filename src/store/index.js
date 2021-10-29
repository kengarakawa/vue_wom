import { createStore } from 'vuex'

export default createStore({
  state: {
    
    selectedToons : [
    ]
  },
  mutations: {
    addToon: (state , { toon }) => {
            
      if( state.selectedToons.find( (t) => t.name == toon.name) == undefined ) {
        
        let daToon = toon
        daToon.currentTuneUp = 28
        daToon.preferredTuneUp = 36
        daToon.isHidden = false 
        state.selectedToons.push( daToon )
      } 
    } , 
    removeToon: (state , { name }) => {            
      state.selectedToons = state.selectedToons.filter( (t) => t.name != name)      
    } , 
    setMinTuneUp( state, { name , minTuneUpValue }) {
      state.selectedToons.forEach( 
        (t, i) => {
          if(t.name == name) {
            state.selectedToons[i].currentTuneUp = minTuneUpValue 
          }
        }
      )      
    } , 
    setMaxTuneUp( state, { name , maxTuneUpValue }) {
      state.selectedToons.forEach( 
        (t, i) => {
          if(t.name == name) {
            state.selectedToons[i].preferredTuneUp = maxTuneUpValue 
          }
        }
      )      
    } , 
    
    toggleHidden(state, { name }) {
      state.selectedToons.forEach( 
        (t, i) => {
          if(t.name == name) {
            state.selectedToons[i].isHidden = !state.selectedToons[i].isHidden 
          }
        }
      )      
    } , 
    
  },
  actions: {
  },
  modules: {
  } , 
  getters : {
    
    selectedToons: (state) => {
      return state.selectedToons 
    }
  }
})
