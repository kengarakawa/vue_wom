<template>
    <h1>Resource output here</h1>
    
    {{ toons.length }}
    
    
    
    <div v-for="(toon, index) in toons" :key="index">
        {{ toon.name }} , {{ toon.currentTuneUp }} , {{ toon.preferredTuneUp }}
    </div>
    
    <template v-if ="resources.length > 0">
    <div v-for="(resource,index) in resouces" :key="index">
        {{resource}} ???
        <hr />
    </div>
    </template>
</template>


<script>
import tuneUps from '@/assets/tuneups.json'
export default {
    name: 'TuneUpResourceOutput' , 
    data() {
       return {
           resources : []
       }
    }, 
    computed : {
        toons() {
            return this.$store.state.selectedToons
        } ,
        
    } , 
    
    // setup() {
    //     return { 
    //         resources : []
    //     }
    // }, 
    mounted() {
        
            console.log(tuneUps) 
            this.calulateResources()
        
    },
    
    methods: {
        
        calulateResources() {            
            let toons = this.$store.state.selectedToons
            console.log('CALC***') 
            console.log(toons)
            let out = toons.map( toon => {                                
                tuneUps.map( (tu) => {                    
                    if( tu.level > toon.currentTuneUp && tu.level <= toon.preferredTeamUp) {
                        return tu.level
                    }
                    
                })                            
            }).join()                            
            console.log(out)
            this.resources = out 
            return out
        }

    },
    
}
</script>
