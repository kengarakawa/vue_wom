import { createStore } from 'vuex'

export default createStore({
  state: {
    
    selectedToons : [
    ]
  },
  mutations: {
    addToon: (state , { toon }) => {
            
      if( state.selectedToons.find( (t) => t.name == toon.name) == undefined ) {
        
        
        // toon.currentTuneUp = 1
        // toon.preferredTuneUp = 2
        // state.selectedToons.push( toon )
        // console.log('pusing toon')
        // console.log(toon)
        let daToon = toon
        daToon.currentTuneUp = 1
        daToon.preferredTuneUp = 2
        state.selectedToons.push( daToon )
        console.log('pusing toon')
        console.log(toon)
      } else {
//        console.log("Already there")
      }
//      console.log(state.selectedToons)
      
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
