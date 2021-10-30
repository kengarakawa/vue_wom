<template>
    <div class="inline px-3 pb-5 tune-up-min-max-card" :class="{ 'semi' : isHiding }">
        <div class="w-full text-right" >
            <button @click="toggleHiding">  {{ isHiding ? 'Show' : 'Hide' }} </button>&nbsp;&nbsp;
            <button @click="removeToon"> Delete </button>
        </div>
        
        <h1 class="text-xl font-extrabold text-black">{{ toon.name }}</h1>
        
        <div>
            {{toon.type}} / {{ toon.rarity }} / {{ toon.region }}
        </div>
        
        <div>
            <p>Current Level : <input type="number" name="min" min="1" max="44" v-model.number="minTuneUp" @change="updateMinTuneUp($event)"> </p>
            <p>Target Level : <input type="number" name="min" min="2" max="45" v-model.number="maxTuneUp" @change="updateMaxTuneUp($event)"> </p>
        </div>            
        
        
        
    </div>
</template>


<style>
.tune-up-min-max-card {
    background-color: chartreuse;
    width:250px;
    border: solid 1px green;
}
h1 {
    font-weight:bold;
    font-size:30px;
}
input[type=number] {
    width: 3em;
}
.semi {
    opacity: 50%;
}
</style>

<script>
export default {
    name : 'ToonTuneUpMinMaxCard' ,
    props : [
        'toon'
    ] , 
    mounted() {
       
    } ,
    created() {
        this.minTuneUp = this.toon.currentTuneUp 
        this.maxTuneUp = this.toon.preferredTuneUp  
    } , 
    data() {
        return {
            minTuneUp : null , 
            maxTuneUp : null ,
            isHiding : false 
        }
    } ,
    methods: {
        removeToon() {
            this.$store.commit('removeToon' , {
                'name' : this.toon.name 
            })
        }, 
        toggleHiding() {
            this.isHiding = !this.isHiding 
            this.$store.commit('toggleHidden' , {
                'name' : this.toon.name 
            })
        } ,
        updateMinTuneUp(event) {
            // this.minTuneUp = event.target.value    
            this.$store.commit('setMinTuneUp' , {
                'name' : this.toon.name , 
                'minTuneUpValue' : parseInt(event.target.value)
            })
        } , 
        updateMaxTuneUp(event) {
            this.$store.commit('setMaxTuneUp' , {
                'name' : this.toon.name , 
                'maxTuneUpValue' : parseInt(event.target.value)
            })
        }
    },
    
}
</script>