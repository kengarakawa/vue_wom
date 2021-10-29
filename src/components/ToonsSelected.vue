<template>
    
    <div v-for="(toon,index) in toons" :key="index" class="flex">
        <ToonTuneUpMinMaxCard :toon="toon" />
    </div>
</template>


<script >
import ToonTuneUpMinMaxCard from '@/components/ToonTuneUpMinMaxCard.vue'

export default { 
    name : 'ToonsSelected' ,
    components : {
        ToonTuneUpMinMaxCard 
    },     
    computed : {
        toons() {
            return this.$store.getters.selectedToons
        }
    } ,
    data() {
        return {
        }
    }
    
}
</script >