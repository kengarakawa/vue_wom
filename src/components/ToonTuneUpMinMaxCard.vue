<template>
    <div class="inline px-3 pb-5 tune-up-min-max-card" :class="{ 'semi' : isHiding }">
        <div class="w-full text-right" >
            <button @click="toggleHiding">  {{ isHiding ? 'Show' : 'Hide' }} </button>&nbsp;&nbsp;
            <button> Delete </button>
        </div>
        
        <h1 class="text-xl font-extrabold text-black">{{ toon.name }}</h1>
        
        <div>
            {{toon.type}} / {{ toon.rarity }} / {{ toon.region }}
        </div>
        
        <div>
            <p>Current Level : <input type="number" name="min" min="1" max="34" v-model="minTuneUp" @change="updateMinTuneUp($event)"> </p>
            <p>Target Level : <input type="number" name="min" min="2" max="35" v-model="maxTuneUp" @change="updateMaxTuneUp($event)"> </p>
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
        console.log('created')
        console.log(this.minTuneUp )
        console.log(this.maxTuneUp )
    } , 
    data() {
        return {
            minTuneUp : null , 
            maxTuneUp : null ,
            isHiding : false 
        }
    } ,
    methods: {
        toggleHiding() {
            this.isHiding = !this.isHiding 
        } ,
        updateMinTuneUp(event) {
            // this.minTuneUp = event.target.value    
            this.$store.commit('setMinTuneUp' , {
                'name' : this.toon.name , 
                'minTuneUpValue' : event.target.value                 
            })
        } , 
        updateMaxTuneUp(event) {
            this.$store.commit('setMaxTuneUp' , {
                'name' : this.toon.name , 
                'maxTuneUpValue' : event.target.value                 
            })
        }
    },
    
}
</script>