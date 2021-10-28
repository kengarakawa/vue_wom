<template>
  <div class="container">
    <div class="bg-gray-300">
      <ToonsSelection />
      
      <ToonsSelected />
      
      <TuneUpResourceOutput />
    </div>
  </div>
</template>

<script>
import ToonsSelection from '@/components/ToonSelection.vue'
import ToonsSelected from '@/components/ToonsSelected.vue'
import TuneUpResourceOutput from '@/components/TuneUpResourceOutput.vue'


export default {
  name: "TuneUp",
  components : {
      ToonsSelection ,
      ToonsSelected ,
      TuneUpResourceOutput
  }
}
</script>

<style>
h1 {
  color: red;
}
</style>

