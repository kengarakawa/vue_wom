<template>
  <div class="bg-red-200">
    <h3>Resource Output</h3>
    <div>
        {{ toon }}      
      {{ tempx }}
  </div>



    <table class="w-full tu-resources" cellspacing="0" cellpadding="3" border="1">
      <tr>
        <th rowspan="2" class="border border-black">Golds</th>
        <th colspan="2" class="border border-black">Anvils</th>
        <th colspan="3" class="border border-black">Dynamites</th>
        <th colspan="2" class="border border-black">Boosters</th>
        <th colspan="3" class="border border-black">Regional Mat.</th>
        <th rowspan="2" class="border border-black">Special Mat.</th>
        <th rowspan="2" class="border border-black">Secret Stuff</th>
        <th rowspan="2" class="border border-black">Formulars</th>
        <th rowspan="2" class="border border-black">Atoms</th>
      </tr>
      <tr>
        <th class="border border-black">Common</th>
        <th class="border border-black">Fine</th>
        
        <th class="border border-black">Common</th>
        <th class="border border-black">Fine</th>
        <th class="border border-black">Superior</th>        
        
        <th class="border border-black">Common</th>
        <th class="border border-black">Fine</th>
        
        <th class="border border-black">Common</th>
        <th class="border border-black">Fine</th>
        <th class="border border-black">Superior</th>        
      </tr>

      <tr>
        <td class="border border-black">{{ temp["gold"] || empty_symbol }} </td>
        <td class="border border-black">
          {{ temp["AV_common_anvil"] || empty_symbol }}
        </td>
        <td class="border border-black">
          {{ temp["AV_fine_anvil"] || empty_symbol }}
        </td>
        
        <td class="border border-black">
            {{ temp["DY_common_dynamite"] || empty_symbol}}
        </td>
        <td class="border border-black">
            {{ temp["DY_fine_dynamite"] || empty_symbol}}
        </td>
        <td class="border border-black">
            {{ temp["DY_superior_dynamite"] || empty_symbol}}
        </td>
        
        <td class="border border-black">            
            <span v-html="commonBooster(temp)"></span>
        </td>
        <td class="border border-black">
            <span v-html="fineBooster(temp)"></span>
        </td>
        <td class="border border-black">            
            <span v-html="regionalMaterial(temp , 'common')"></span>
        </td>
        <td class="border border-black">
            <span v-html="regionalMaterial(temp , 'fine')"></span>
        </td>
        <td class="border border-black">
            <span v-html="regionalMaterial(temp , 'superior')"></span>
        </td>
        <td class="border border-black">
            {{ specialMaterial(temp) }}
        </td>
        
        <td class="border border-black">
            {{ temp["secret_stuff"] || empty_symbol}}
        </td>
        
        <td class="border border-black">
            {{ formular(temp) }}
        </td>
        <td class="border border-black">
            {{ atom(temp) }}
        </td>
      </tr>
    </table>
  </div>
  
  
  <button @click="countResources">RECOUNT RESOURCES</button>
</template>


<script>
import tuneUps from "@/assets/tuneups.json"
import { getResourceIcon } from "@/services/tuneUpHelper.js"
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
     tempx()  {
         return this.countResources()
     }
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
      
      

  }, 
  methods: {
      _icon(resourceCode) {
          return getResourceIcon(resourceCode)
          
      },
      commonBooster(res) {
         let out = []
         
         for( let key in res) {
             if(key.indexOf('BO_') >= 0 && key.indexOf('BO_fine') < 0) {
                 out.push(
                     `${res[key]} ` + getResourceIcon(key)
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
                     `${res[key]} ` + getResourceIcon(key)
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
     
     regionalMaterial(res , rarity) {
         let out = []         
         for( let key in res) {
             if(key.indexOf('RG_') >= 0 && key.indexOf(rarity) >= 0) {
                 out.push(
                     `${res[key]} ` + getResourceIcon(key)
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

    //   this.$emit("oncountresource", resources)
    //   console.log("emitted")
    },
  },
}
</script>



<style >
    .tu-resources {
        border: solid 1px #000000; 
        border-collapse: collapse;
        
        text-align:center;
    }
    table.tu-resources th{
        font-size:14px        
    }
    table.tu-resources td{
        font-size:12px        
    }
    
    .icon {
        width: 30px;
        height:30px;
    }
</style>
