<template>
  <div class="bg-red-200">
    <h3>Resource Output</h3>
    <div>
        {{ toon }}      
      {{ temp }}
  </div
    >

    <table class="w-full tu-resources" cellspacing="0" cellpadding="3" border="1">
      <tr>
        <th rowspan="2">Golds</th>
        <th colspan="2">Anvils</th>
        <th colspan="3">Dynamites</th>
        <th colspan="2">Boosters</th>
        <th rowspan="2">Regional Mat.</th>
        <th rowspan="2">Special Mat.</th>
        <th rowspan="2">Secret Stuff</th>
        <th rowspan="2">Formulars</th>
        <th rowspan="2">Atoms</th>
      </tr>
      <tr>
        <th>Common</th>
        <th>Fine</th>
        
        <th>Common</th>
        <th>Fine</th>
        <th>Superior</th>        
        
        <th>Common</th>
        <th>Fine</th>
      </tr>

      <tr>
        <td>{{ temp["gold"] || empty_symbol }} </td>
        <td>
          {{ temp["AV_common_anvil"] || empty_symbol }}
        </td>
        <td>
          {{ temp["AV_fine_anvil"] || empty_symbol }}
        </td>
        
        <td>
            {{ temp["DY_common_dynamite"] || empty_symbol}}
        </td>
        <td>
            {{ temp["DY_fine_dynamite"] || empty_symbol}}
        </td>
        <td>
            {{ temp["DY_superior_dynamite"] || empty_symbol}}
        </td>
        
        <td>
            {{ commonBooster(temp) }}
        </td>
        <td>
            {{ fineBooster(temp) }}
        </td>
        <td>
            {{ regionalMaterial(temp) }}
        </td>
        <td>
            {{ specialMaterial(temp) }}
        </td>
        
        <td>
            {{ temp["secret_stuff"] || empty_symbol}}
        </td>
        
        <td>
            {{ formular(temp) }}
        </td>
        <td>
            {{ atom(temp) }}
        </td>
      </tr>
    </table>
  </div>
  
  
  <button @click="countResources">RECOUNT RESOURCES</button>
</template>

<style scoped>
    .tu-resources {
        border: solid 1px #000000
    }
    table.tu-resources th{
        font-size:14px        
    }
    table.tu-resources td{
        font-size:12px        
    }
</style>

<script>
import tuneUps from "@/assets/tuneups.json"
import {
  getRegionalMaterialName,
  getSpecialMaterialName,
  getFormularName,
} from "@/services/tuneUpHelper.js"

export default {
  name: "ResourceOutput",
  emits : ['oncountresource'], 
  props: {
    toon: {
      default: null,
    },

    output: {
      type: Object,
    },
    empty_symbol: {
      default: "-",
    },
  },
  
  computed: {
     
  }, 
  data() {
    return {
      resources: {},
      tuneUps: [],
      temp: {},
    }
  },
  mounted() {
    this.tuneUps = tuneUps.tuneups
    this.countResources()
  },
  updated() {
      
      console.log('Being called')

  }, 
  methods: {
      commonBooster(res) {
         let out = []
         
         for( let key in res) {
             if(key.indexOf('BO_') >= 0 && key.indexOf('BO_fine') < 0) {
                 out.push(
                     `${res[key]} - ${key}`
                 )
             }
         }         
         return out.length > 0 ? out.join(" ") : this.empty_symbol 
     } , 
      fineBooster(res) {
         let out = []         
         for( let key in res) {
             if(key.indexOf('BO_fine') >= 0) {
                 out.push(
                     `${res[key]} - ${key}`
                 )
             }
         }         
         return out.length > 0 ? out.join(" ") : this.empty_symbol 
     } , 
     formular(res) {
         let out = []         
         for( let key in res) {
             if(key.indexOf('FM_') >= 0) {
                 out.push(
                     `${res[key]} - ${key}`
                 )
             }
         }         
         return out.length > 0 ? out.join(" ") : this.empty_symbol 
     } , 
     atom(res) {
         let out = []         
         for( let key in res) {
             if(key.indexOf('AT_') >= 0) {
                 out.push(
                     `${res[key]} - ${key}`
                 )
             }
         }         
         return out.length > 0 ? out.join(" ") : this.empty_symbol 
     } ,      
     specialMaterial(res) {
         let out = []         
         for( let key in res) {
             if(key.indexOf('SM_') >= 0) {
                 out.push(
                     `${res[key]} - ${key}`
                 )
             }
         }         
         return out.length > 0 ? out.join(" ") : this.empty_symbol 
     } ,      
     
     regionalMaterial(res) {
         let out = []         
         for( let key in res) {
             if(key.indexOf('RG_') >= 0) {
                 out.push(
                     `${res[key]} - ${key}`
                 )
             }
         }         
         return out.length > 0 ? out.join(" ") : this.empty_symbol 
     } ,      
     
     
    countResources() {
        console.log("Counting Resource")
      this.resources = {}
      let resources = {}

      let rarity = this.toon.rarity.toLowerCase()
      let region = this.toon.region.toLowerCase()
      let type = this.toon.type.toLowerCase()

      let withPrefix = true

      this.tuneUps.forEach((tu) => {
        // red of all unmatched levels
        if (
          tu.level <= this.toon.currentTuneUp ||
          tu.level > this.toon.preferredTuneUp
        ) {
          return
        }

        // looping throug tu props
        for (let key in tu) {
          //
          if (key == "level") {
            continue
          }

          let updatedKey = key
          let isAtom = false

          // is one of the boosters
          if (key.indexOf("booster") >= 0) {
            updatedKey =
              key.indexOf("fine") >= 0
                ? `fine_${type}_booster`
                : `${type}_booster`
            if (withPrefix) {
              updatedKey = "BO_" + updatedKey
            }
          } else if (key.indexOf("regional") >= 0) {
            // is one of the regional
            updatedKey = key.replace(
              "regional",
              getRegionalMaterialName(region)
            )
            if (withPrefix) {
              updatedKey = "RG_" + updatedKey
            }
          } else if (key == "special_material") {
            // is special material
            updatedKey = getSpecialMaterialName(this.toon.base)
            if (withPrefix) {
              updatedKey = "SM_" + updatedKey
            }
          } else if (key == "formular") {
            updatedKey = getFormularName(this.toon.rarity) + "_formular"
            if (withPrefix) {
              updatedKey = "FM_" + updatedKey
            }
          } else if (key == "atom") {
            isAtom = true
            updatedKey = `${region}_atom`
            if (withPrefix) {
              updatedKey = "AT_" + updatedKey
            }
          } else if (key.indexOf("anvil") >= 0 && withPrefix) {
            updatedKey = "AV_" + updatedKey
          } else if (key.indexOf("dynamite") >= 0 && withPrefix) {
            updatedKey = "DY_" + updatedKey
          }

          if (resources[updatedKey] == undefined) {
            // console.log(
            //   `resource with key = ${updatedKey} is undefined, make a blank one`
            // )
            resources[updatedKey] = 0
          }

//          console.log(`adding  ${tu[key]}`)
          resources[updatedKey] += isAtom ? tu["atom"][rarity] : tu[key]
        }

        // this.resources.push(resources)
      })

      // end foreach
      console.log("sum up for this loop ")
      console.log(resources)

      this.temp = resources

      this.$emit("oncountresource", resources)
      console.log("emitted")
    },
  },
}
</script>
