<template>
  <h1>Resource output here</h1>

  {{ toons.length }}

  <div v-for="(toon, index) in toons" :key="index">
    {{ toon.name }} , {{ toon.currentTuneUp }} , {{ toon.preferredTuneUp }} ,
    {{ toon.isHidden }}

    


    
    
    <!-- <ResourceOutput :toon="toon" :resource="calculateResources(toon)" /> -->
    <ResourceOutput :toon="toon" @oncountresource="onCountResource"/>    
  </div>
  
  <h1>total {{ output.length}} items</h1>
  <button @click="log">Output Log</button>

</template>

<script>
import tuneUps from "@/assets/tuneups.json"
import ResourceOutput from "@/components/ResourceOutput"
export default {
  name: "TuneUpResourceOutput",
  emits : ['oncountresource'], 
  data() {
    return {
      resources: [],
      tuneUps: [],
      
      output :[] , 
    //  toons: [],
    }
  },
  components: {
     ResourceOutput 
  }, 
  computed: {
    toons() {
        return this.$store.state.selectedToons
    } ,
        
  },

  // setup() {
  //     return {
  //         resources : []
  //     }
  // },
  mounted() {
    // console.log(tuneUps)
    // this.calulateResources()

    this.tuneUps = tuneUps.tuneups
    // this.toons = this.$store.state.selectedToons
    
    let size = this.$store.state.selectedToons;
    this.output = []
    for(let i=0; i<size;i++) {
        this.output.push({})
    }
  },


  methods: {
      
    onCountResource(out) {
        console.log('HERERERERE ... returning from emit, getting ')
        console.log(out)
      this.output.push(out)   
    } , 
      
    log() {
        console.log(this.output) 
    } , 
    
      
    getRegionalMaterialName(region)   {
        region = region.toLowerCase()
        switch(region) {
            case 'forest'  :  return 'Dry Leaf'
            case 'town' : return 'Hydrant'
            case 'farm' : return 'Bucket of Milk'
            case 'desert' : return 'Dried Skull'
            case 'city' : return 'Traffic light'
            case 'space' : return 'Evaporator'
            case 'summit' : return 'Mittens'
            case 'tasmania' : return 'Skull'
            case 'wb studio' : return 'Movie Camera'
            case 'avalooney' : return 'Flower Crown'
            default : return region 
            
        }
        
    } , 
    
    getTypeBoosterName(type) {
        switch(type.toLowerCase()) {
            case 'attacker'  : return 'Attacker'
            case 'defender'  : return 'Defender'
            case 'support'  : return 'Support'
            default  : return type
        }
    } , 
    
    getSpecialMaterialName(toonBase , itemName) {
        switch(toonBase.toLowerCase()) {
            case 'barnyard dawg'  :  return 'Dog Collar'
            case 'bugs bunny'  :  return 'Carrot'
            case 'daffy duck'  :  return 'Mirror'
            case 'dr. frankenbeans'  :  return 'Old Switch'
            case 'egghead jr.'  :  return 'pencil'
            case 'elmer fudd'  :  return 'Hunting Hat'
            case 'foghorn leghorn'  :  return 'Baseball'
            case 'gossamer'  :  return 'Hair Shampoo'
            case 'granny'  :  return 'Granny\'s Glasses'
            case 'hector'  :  return 'Blue Ball'
            case 'henery hawk'  :  return 'CHICKEN???'
            case 'hippety hopper'  :  return 'PUNCHING GLOVE'
            case 'hugo'  :  return 'GEORGE'
            case 'k-9'  :  return 'Biscuit'
            case 'lebron james'  :  return 'BASKETBALL'
            case 'lola'  :  return 'Scrunchy'
            case 'marvin'  :  return 'Sneaker Shoes'
            case 'melissa'  :  return 'Pocket Mirror'
            case 'miss prissy'  :  return 'Chicken Nest'
            case 'nasty canasta'  :  return 'Vile Cocktail'
            case 'o\' mike'  :  return 'Clover'
            case 'o\' pat'  :  return 'Clover'
            case 'penelope'  :  return 'Gas Mask'
            case 'pepe le pew'  :  return 'Bottle of Perfume'
            case 'petunia pig'  :  return 'Red Bow'            
            case 'porky pig'  :  return 'Watering Can'
            case 'ralph wolf'  :  return 'ACME Catalog'
            case 'roadrunner'  :  return 'Bird Seed'
            case 'sam sheepdog'  :  return 'Red Punching Clock'
            
            case 'speedy gonzales'  :  return 'Cheese'
            case 'sylvester'  :  return 'Bird Cage'
            case 'sylvester jr'  :  return 'Paper Bag'
            case 'tasmanian she-devil'  :  return 'Tasty Meat'
            case 'taz'  :  return 'Tasty Meat'
            case 'the mighty angelo'  :  return 'Weights Meat'
            case 'toro'  :  return 'Nose Ring'
            case 'tweety'  :  return 'Bird Perch'
            case 'wille e. coyote'  :  return 'ACME Catalog'
            case 'witch hazel'  :  return 'Potion Book Meat'
            case 'yosemite sam'  :  return 'Comb'
            default : return itemName 
            
            
        }
    } ,
      
    calculateResources(toon) {
      // let out = []
      // out = this.tuneUps.filter( tu => {
      //     return tu.level > toon.currentTuneUp  && tu.level <= toon.preferredTuneUp
      // })
      // return out
      let out = []
      this.tuneUps.forEach((tu) => {
        if (tu.level > toon.currentTuneUp && tu.level <= toon.preferredTuneUp) {
          // console.log(tu)
          for (let key in tu) {
            console.log(key)
            if (key == "level") {
              continue
            }
            let updatedKey = key 
            
            if(key.indexOf('regional') >= 0) {                
                updatedKey = key.substr(0, key.indexOf('regional')) + this.getRegionalMaterialName(toon.region)
            }

            if(key.indexOf('booster') >= 0) {                
                // updatedKey = key.substr(0, key.indexOf('booster')) + this.getRegionalMaterialName(toon.region)                
                updatedKey = (key.indexOf('fine') >= 0) ? 'Fine ' + this.getTypeBoosterName(toon.type) : this.getTypeBoosterName(toon.type)
                updatedKey += ' Booster'
            }
            
            let isAtom = false 
            let rarity = ''
            if(key == 'atom') {
                isAtom = true 
                rarity = toon.rarity.toLowerCase()                                
                updatedKey = toon.region.toLowerCase() + ' atom'
                
            }


            if (out[key] == undefined) {
              console.log(`setting ${key}`)
              out[updatedKey] = 0
            }
            
            
            if(isAtom) {
                console.log("ME!")
                console.log(key)
                console.log(tu[key][rarity])
            }

            
            out[updatedKey] += isAtom ? tu[key][rarity] :  tu[key]
          }
        }
      })
      console.log(typeof out)
      console.log(out)
      console.log("HERE?")
      
      return out 
      
      
    //   return Object.keys(out).map((item ) => {
    //     // console.log(`item is ${item}`)        
    //     // console.log(`value is ${out[item]}`)
        
    //     return `${item} - ${out[item]}`
    //   })
      
    },
  },
}
</script>
